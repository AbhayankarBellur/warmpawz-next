# Design Document

## Overview

This design outlines the integration of Tina CMS into the Warmpawz blog system. Tina is a git-based CMS that provides a visual editing interface while storing all content as markdown files in the repository. This approach maintains version control, simplifies deployment, and preserves the exact styling and user experience of the current blog implementation.

The system will consist of:
1. **Content Layer**: Markdown/MDX files with frontmatter stored in `content/blog/`
2. **CMS Layer**: Tina admin interface at `/admin` for visual editing
3. **Presentation Layer**: Existing Next.js pages and components (unchanged styling)
4. **Data Layer**: File system reading and markdown parsing at build time

## Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Content Editors                          │
│                    (Non-technical users)                     │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                   Tina Admin (/admin)                        │
│              Visual editing interface                        │
│         ┌──────────────────────────────────┐                │
│         │  - Rich text editor              │                │
│         │  - Image upload                  │                │
│         │  - Field validation              │                │
│         │  - Live preview                  │                │
│         └──────────────────────────────────┘                │
└────────────────────────┬────────────────────────────────────┘
                         │ Commits changes
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                   Git Repository                             │
│                                                              │
│   content/blog/                                              │
│   ├── 1.mdx  (frontmatter + markdown content)              │
│   ├── 2.mdx                                                 │
│   └── ...                                                   │
│                                                              │
│   public/images/                                            │
│   ├── blog-1.png                                            │
│   ├── blog-2.png                                            │
│   └── ...                                                   │
└────────────────────────┬────────────────────────────────────┘
                         │ Triggers deployment
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                   Build Process                              │
│                                                              │
│   1. Read markdown files from content/blog/                 │
│   2. Parse frontmatter (metadata)                           │
│   3. Convert markdown to HTML                               │
│   4. Generate static pages                                  │
│   5. Optimize images                                        │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                Production Website                            │
│                                                              │
│   /blog          → Grid view (existing styling)             │
│   /blog/1        → Article page (existing styling)          │
│   /blog/2        → Article page (existing styling)          │
│   /admin         → Tina CMS interface                       │
└─────────────────────────────────────────────────────────────┘
```

### Content Flow

1. **Content Creation**: Editor uses Tina admin interface to create/edit articles
2. **Git Commit**: Tina commits changes to repository with descriptive message
3. **Deployment Trigger**: Git push triggers automatic deployment (Vercel/Amplify)
4. **Build**: Next.js reads markdown files and generates static pages
5. **Delivery**: Users access blog with zero latency (static pages)

## Components and Interfaces

### 1. Content Structure

#### Markdown File Format

Each blog article will be stored as an MDX file in `content/blog/` with this structure:

```mdx
---
title: "Article Title Here"
excerpt: "Brief description of the article for grid view"
image: "/images/blog-1.png"
imagePosition: "center 30%"
readTime: "5 min read"
category: "Pet Care"
---

Article content goes here in markdown format.

Paragraphs are separated by blank lines.

**Bold text** and *italic text* work as expected.
```

#### Frontmatter Schema

```typescript
interface BlogArticleFrontmatter {
  title: string;           // Article title
  excerpt: string;         // Short description (2-3 sentences)
  image: string;           // Path to featured image
  imagePosition: string;   // CSS objectPosition value
  readTime: string;        // e.g., "5 min read"
  category: string;        // e.g., "Pet Care", "Health", "Training"
}
```

### 2. Tina CMS Configuration

#### Schema Definition

```typescript
// tina/config.ts
import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  
  schema: {
    collections: [
      {
        name: "blog",
        label: "Blog Articles",
        path: "content/blog",
        format: "mdx",
        
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "string",
            name: "excerpt",
            label: "Excerpt",
            required: true,
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "image",
            label: "Featured Image",
            required: true,
          },
          {
            type: "string",
            name: "imagePosition",
            label: "Image Position",
            description: "CSS objectPosition value (e.g., 'center 30%', 'top', 'bottom')",
            required: true,
          },
          {
            type: "string",
            name: "readTime",
            label: "Read Time",
            required: true,
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            required: true,
            options: ["Pet Care", "Health", "Training", "Behaviour", "Nutrition", "Seasonal Care"],
          },
          {
            type: "rich-text",
            name: "body",
            label: "Article Content",
            isBody: true,
            required: true,
          },
        ],
      },
    ],
  },
});
```

### 3. Data Reading Layer

#### Blog Data Service

```typescript
// lib/blog.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const blogDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  imagePosition: string;
  readTime: string;
  category: string;
  content: string;
}

export async function getAllBlogArticles(): Promise<BlogArticle[]> {
  const fileNames = fs.readdirSync(blogDirectory);
  
  const articles = await Promise.all(
    fileNames
      .filter(fileName => fileName.endsWith('.mdx'))
      .map(async (fileName) => {
        const id = fileName.replace(/\.mdx$/, '');
        const fullPath = path.join(blogDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
        
        // Convert markdown to HTML
        const processedContent = await remark()
          .use(html)
          .process(content);
        const contentHtml = processedContent.toString();
        
        return {
          id,
          title: data.title,
          excerpt: data.excerpt,
          image: data.image,
          imagePosition: data.imagePosition || 'center 30%',
          readTime: data.readTime,
          category: data.category,
          content: contentHtml,
        };
      })
  );
  
  // Sort by ID (numeric)
  return articles.sort((a, b) => parseInt(a.id) - parseInt(b.id));
}

export async function getBlogArticleById(id: string): Promise<BlogArticle | null> {
  try {
    const fullPath = path.join(blogDirectory, `${id}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    const processedContent = await remark()
      .use(html)
      .process(content);
    const contentHtml = processedContent.toString();
    
    return {
      id,
      title: data.title,
      excerpt: data.excerpt,
      image: data.image,
      imagePosition: data.imagePosition || 'center 30%',
      readTime: data.readTime,
      category: data.category,
      content: contentHtml,
    };
  } catch (error) {
    return null;
  }
}
```

### 4. Page Components (Minimal Changes)

#### Blog Grid Page

```typescript
// app/blog/page.tsx
import { getAllBlogArticles } from '@/lib/blog';
import BlogGridClient from './BlogGridClient';

export default async function BlogPage() {
  const articles = await getAllBlogArticles();
  
  return <BlogGridClient articles={articles} />;
}
```

#### Blog Article Page

```typescript
// app/blog/[id]/page.tsx
import { getBlogArticleById, getAllBlogArticles } from '@/lib/blog';
import BlogArticleClient from './BlogArticleClient';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const articles = await getAllBlogArticles();
  return articles.map((article) => ({
    id: article.id,
  }));
}

export default async function BlogArticlePage({ params }: { params: { id: string } }) {
  const article = await getBlogArticleById(params.id);
  
  if (!article) {
    notFound();
  }
  
  return <BlogArticleClient article={article} />;
}
```

## Data Models

### BlogArticle Interface

```typescript
interface BlogArticle {
  id: string;              // Numeric ID as string (e.g., "1", "2", "3")
  title: string;           // Article title
  excerpt: string;         // Short description for grid view
  image: string;           // Path to featured image (e.g., "/images/blog-1.png")
  imagePosition: string;   // CSS objectPosition value (e.g., "center 30%")
  readTime: string;        // Reading time (e.g., "5 min read")
  category: string;        // Article category
  content: string;         // Full article content as HTML
}
```

### Tina Generated Types

Tina will automatically generate TypeScript types based on the schema:

```typescript
// tina/__generated__/types.ts (auto-generated)
export interface BlogArticle {
  title: string;
  excerpt: string;
  image: string;
  imagePosition: string;
  readTime: string;
  category: string;
  body: TinaMarkdownContent;
}
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Content file structure preservation
*For any* blog article created or edited through Tina CMS, the resulting markdown file should contain valid frontmatter and markdown content that can be successfully parsed by the build system.
**Validates: Requirements 1.2, 7.2**

### Property 2: Styling consistency
*For any* blog article rendered on the website, the visual styling (grid card appearance, article page layout, typography, animations) should match the current implementation exactly.
**Validates: Requirements 2.1, 2.2, 2.3, 3.1, 3.2**

### Property 3: Image position application
*For any* blog article with a specified imagePosition value, both the grid card and article page should apply that CSS objectPosition value to the featured image.
**Validates: Requirements 2.4, 3.3, 9.3, 9.4**

### Property 4: URL routing preservation
*For any* existing blog article ID (1-20), the URL /blog/[id] should continue to work and display the correct article content.
**Validates: Requirements 8.1, 8.2, 8.3**

### Property 5: Content migration completeness
*For any* of the 20 existing blog articles, after migration to markdown format, the rendered output should be visually and textually identical to the current implementation.
**Validates: Requirements 7.1, 7.2, 7.5**

### Property 6: Markdown to HTML conversion
*For any* markdown content with paragraph breaks, the converted HTML should preserve those breaks and apply the correct prose styling classes.
**Validates: Requirements 3.4, 5.3, 5.5**

### Property 7: Build-time data reading
*For any* valid markdown file in content/blog/, the build process should successfully read, parse, and generate a static page without errors.
**Validates: Requirements 4.1, 4.3, 4.5**

### Property 8: Git commit creation
*For any* article save action in Tina admin, the system should create a git commit with the changed files and a descriptive commit message.
**Validates: Requirements 1.3, 6.4**

### Property 9: Type safety enforcement
*For any* component that receives blog article data, TypeScript should enforce that all required fields are present and correctly typed at compile time.
**Validates: Requirements 10.3, 10.4**

### Property 10: Authentication requirement
*For any* user attempting to access /admin without valid authentication, the system should require login before allowing content editing.
**Validates: Requirements 6.2**

## Error Handling

### File System Errors

**Scenario**: Markdown file is missing or corrupted
- **Detection**: Try-catch blocks in `getBlogArticleById`
- **Response**: Return null and show 404 page
- **Logging**: Log error details for debugging

**Scenario**: Content directory doesn't exist
- **Detection**: Check directory existence before reading
- **Response**: Create directory if missing, log warning
- **Fallback**: Return empty array for blog list

### Markdown Parsing Errors

**Scenario**: Invalid frontmatter format
- **Detection**: gray-matter parsing failure
- **Response**: Skip file and log error
- **User Impact**: Article won't appear in list

**Scenario**: Markdown conversion fails
- **Detection**: remark processing error
- **Response**: Use raw markdown as fallback
- **Logging**: Log conversion error

### Image Handling Errors

**Scenario**: Featured image file doesn't exist
- **Detection**: Next.js Image component error
- **Response**: Show placeholder image
- **User Feedback**: Log missing image path

**Scenario**: Invalid imagePosition value
- **Detection**: CSS validation
- **Response**: Fall back to default "center 30%"
- **Logging**: Warn about invalid value

### Tina CMS Errors

**Scenario**: Authentication failure
- **Detection**: Tina auth middleware
- **Response**: Redirect to login page
- **User Feedback**: Show "Authentication required" message

**Scenario**: Git commit failure
- **Detection**: Tina git operations
- **Response**: Show error message, don't lose editor content
- **User Action**: Retry commit or save locally

**Scenario**: Schema validation failure
- **Detection**: Tina field validation
- **Response**: Show inline error messages
- **User Action**: Fix validation errors before saving

### Build Errors

**Scenario**: TypeScript type errors
- **Detection**: Compile-time type checking
- **Response**: Build fails with clear error messages
- **Developer Action**: Fix type mismatches

**Scenario**: Missing required frontmatter fields
- **Detection**: Type validation during build
- **Response**: Build warning, use default values
- **Logging**: List files with missing fields

## Testing Strategy

### Unit Tests

**File Reading and Parsing**
- Test `getAllBlogArticles()` returns correct number of articles
- Test `getBlogArticleById()` returns correct article data
- Test frontmatter parsing with valid and invalid data
- Test markdown to HTML conversion preserves formatting

**Type Safety**
- Test TypeScript compilation catches missing fields
- Test interface conformance for all data structures

**Error Handling**
- Test behavior when markdown file is missing
- Test behavior when frontmatter is invalid
- Test fallback values for optional fields

### Integration Tests

**End-to-End Content Flow**
- Create article in Tina → verify markdown file created
- Edit article in Tina → verify git commit created
- Build site → verify article appears in grid
- Navigate to article → verify correct rendering

**Styling Preservation**
- Compare rendered HTML structure before/after migration
- Verify CSS classes match current implementation
- Test hover animations work correctly
- Test scroll animations work on mobile

**Image Handling**
- Upload image in Tina → verify saved to public/images
- Set imagePosition → verify applied in grid and article views
- Test image optimization and loading

### Property-Based Tests

**Property 1: Content file structure preservation**
- Generate random valid frontmatter + markdown content
- Save through Tina
- Parse the resulting file
- Verify all fields are preserved correctly

**Property 2: Styling consistency**
- For each existing article, render before and after migration
- Compare computed styles for key elements
- Verify no visual regressions

**Property 3: Image position application**
- Generate random imagePosition values
- Create articles with those values
- Verify objectPosition CSS is applied correctly in both views

**Property 5: Content migration completeness**
- For each of 20 existing articles
- Migrate to markdown
- Render and compare with original
- Verify text content matches exactly

**Property 7: Build-time data reading**
- Generate random valid markdown files
- Run build process
- Verify all files are read and pages generated
- Verify no build errors

### Manual Testing Checklist

**Tina Admin Interface**
- [ ] Can access /admin route
- [ ] Authentication works correctly
- [ ] Can create new article
- [ ] Can edit existing article
- [ ] Can upload images
- [ ] Live preview shows correct styling
- [ ] Save creates git commit
- [ ] Field validation works

**Blog Grid View**
- [ ] All articles display in grid
- [ ] Card styling matches current design
- [ ] Hover animations work
- [ ] Mobile scroll animations work
- [ ] Background color transitions work
- [ ] Images display with correct position
- [ ] Read time displays correctly

**Article Pages**
- [ ] Article loads correctly
- [ ] Layout matches current design
- [ ] Typography styling is correct
- [ ] Featured image displays with correct position
- [ ] Content formatting is preserved
- [ ] Back button works
- [ ] Navigation works

**Deployment**
- [ ] Build succeeds without errors
- [ ] All 20 articles are accessible
- [ ] Images load correctly
- [ ] No broken links
- [ ] Performance is acceptable

## Implementation Notes

### Migration Strategy

1. **Phase 1: Setup**
   - Install Tina CMS dependencies
   - Configure Tina schema
   - Set up content directory structure
   - Configure authentication

2. **Phase 2: Migration**
   - Create migration script to convert existing articles
   - Convert data/blogArticles.ts to markdown files
   - Copy images to public/images (already there)
   - Verify all content migrated correctly

3. **Phase 3: Integration**
   - Update blog pages to read from markdown files
   - Remove dependency on blogArticles.ts
   - Test all functionality
   - Verify styling matches exactly

4. **Phase 4: Deployment**
   - Deploy Tina admin interface
   - Set up authentication
   - Train content editors
   - Monitor for issues

### Performance Considerations

- **Static Generation**: All blog pages generated at build time (fast)
- **Image Optimization**: Use Next.js Image component (already in place)
- **Markdown Parsing**: Cached during build, not at runtime
- **Bundle Size**: Tina admin only loaded on /admin route

### Security Considerations

- **Authentication**: Tina Cloud handles auth securely
- **Git Commits**: Commits signed with editor identity
- **Environment Variables**: Sensitive tokens in .env.local (not committed)
- **Access Control**: Only authenticated users can access /admin

### Maintenance Considerations

- **Content Versioning**: Full git history for all changes
- **Rollback**: Easy to revert to previous version via git
- **Backup**: Content backed up in git repository
- **Schema Updates**: Tina schema changes require code deployment
