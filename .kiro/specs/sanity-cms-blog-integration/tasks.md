# Implementation Plan

## Overview
This implementation plan outlines the tasks for integrating Tina CMS into the Warmpawz blog system while preserving all existing styling and functionality. Tasks are organized to build incrementally, with testing integrated throughout.

---

## 1. Project Setup and Dependencies

- [ ] 1.1 Install Tina CMS dependencies
  - Install `tinacms`, `@tinacms/cli`, and related packages
  - Update package.json with required dependencies
  - _Requirements: 1.1, 6.1_

- [ ] 1.2 Create Tina configuration file
  - Create `tina/config.ts` with basic schema structure
  - Configure branch, clientId, and token from environment variables
  - Set up media configuration for image uploads
  - _Requirements: 1.2, 6.3_

- [ ] 1.3 Set up environment variables
  - Create `.env.local` with Tina Cloud credentials
  - Add `NEXT_PUBLIC_TINA_CLIENT_ID` and `TINA_TOKEN`
  - Update `.env.local.example` for documentation
  - _Requirements: 6.3_

- [ ] 1.4 Create content directory structure
  - Create `content/blog/` directory for markdown files
  - Set up proper .gitignore rules
  - _Requirements: 7.3_

---

## 2. Define Tina Schema and Content Model

- [ ] 2.1 Define blog article schema in Tina config
  - Add blog collection with all required fields (title, excerpt, image, imagePosition, readTime, category)
  - Configure rich-text field for article body
  - Set up field validation rules
  - _Requirements: 1.2, 9.1, 9.2_

- [ ] 2.2 Configure image upload settings
  - Set media root to `public/images`
  - Configure allowed image formats and sizes
  - _Requirements: 1.4_

- [ ] 2.3 Set up category options
  - Define category dropdown with predefined options (Pet Care, Health, Training, etc.)
  - _Requirements: 1.2_

- [ ]* 2.4 Write property test for schema validation
  - **Property 1: Content file structure preservation**
  - **Validates: Requirements 1.2, 7.2**
  - Generate random valid frontmatter, save through Tina, verify parsing succeeds

---

## 3. Create Data Reading Layer

- [ ] 3.1 Create blog data service file
  - Create `lib/blog.ts` with data reading functions
  - Implement `getAllBlogArticles()` function
  - Implement `getBlogArticleById()` function
  - _Requirements: 4.1, 4.3_

- [ ] 3.2 Implement markdown parsing
  - Use `gray-matter` to parse frontmatter
  - Use `remark` and `remark-html` to convert markdown to HTML
  - Handle parsing errors gracefully
  - _Requirements: 4.4, 5.5_

- [ ] 3.3 Add TypeScript interfaces
  - Define `BlogArticle` interface matching frontmatter schema
  - Define `BlogArticleFrontmatter` interface
  - Export types for use in components
  - _Requirements: 10.2, 10.3_

- [ ]* 3.4 Write unit tests for data reading functions
  - Test `getAllBlogArticles()` with sample markdown files
  - Test `getBlogArticleById()` with valid and invalid IDs
  - Test frontmatter parsing with edge cases
  - Test markdown to HTML conversion
  - _Requirements: 4.1, 4.3, 4.5_

- [ ]* 3.5 Write property test for markdown conversion
  - **Property 6: Markdown to HTML conversion**
  - **Validates: Requirements 3.4, 5.3, 5.5**
  - Generate random markdown with paragraph breaks, verify HTML preserves structure

---

## 4. Migrate Existing Blog Articles

- [ ] 4.1 Create migration script
  - Create `scripts/migrate-blog-articles.ts`
  - Read data from `data/blogArticles.ts`
  - Convert each article to markdown format with frontmatter
  - _Requirements: 7.1, 7.2_

- [ ] 4.2 Run migration for all 20 articles
  - Execute migration script
  - Generate markdown files in `content/blog/` (1.mdx, 2.mdx, etc.)
  - Verify all frontmatter fields are populated correctly
  - _Requirements: 7.1, 7.4_

- [ ] 4.3 Verify migrated content
  - Manually review sample articles for accuracy
  - Check that paragraph breaks are preserved
  - Verify image paths are correct
  - _Requirements: 7.2, 7.5_

- [ ]* 4.4 Write property test for migration completeness
  - **Property 5: Content migration completeness**
  - **Validates: Requirements 7.1, 7.2, 7.5**
  - For each existing article, compare migrated markdown output with original

---

## 5. Update Blog Grid Page

- [ ] 5.1 Convert blog page to server component
  - Update `app/blog/page.tsx` to async server component
  - Call `getAllBlogArticles()` to fetch data
  - Pass data to client component for animations
  - _Requirements: 2.1, 4.1_

- [ ] 5.2 Create BlogGridClient component
  - Extract client-side logic (animations, color transitions) to separate component
  - Preserve all existing GSAP animations
  - Maintain exact styling and hover effects
  - _Requirements: 2.2, 2.3, 2.5_

- [ ] 5.3 Update BlogCard to use new data structure
  - Modify BlogCard props to accept markdown-based data
  - Ensure imagePosition is applied correctly
  - Preserve all existing styling
  - _Requirements: 2.4_

- [ ]* 5.4 Write property test for styling consistency
  - **Property 2: Styling consistency (Grid View)**
  - **Validates: Requirements 2.1, 2.2, 2.3**
  - Compare rendered HTML and computed styles before/after migration

- [ ]* 5.5 Write property test for image position
  - **Property 3: Image position application (Grid)**
  - **Validates: Requirements 2.4, 9.3**
  - Generate random imagePosition values, verify CSS is applied correctly

---

## 6. Update Individual Article Pages

- [ ] 6.1 Convert article page to server component
  - Update `app/blog/[id]/page.tsx` to async server component
  - Implement `generateStaticParams()` for static generation
  - Call `getBlogArticleById()` to fetch article data
  - _Requirements: 3.1, 8.2_

- [ ] 6.2 Create BlogArticleClient component
  - Extract client-side logic to separate component
  - Render article content from HTML string
  - Preserve all existing styling (typography, layout, spacing)
  - _Requirements: 3.2, 3.4_

- [ ] 6.3 Apply imagePosition to featured image
  - Use imagePosition value from frontmatter
  - Apply as CSS objectPosition style
  - _Requirements: 3.3, 9.4_

- [ ] 6.4 Implement 404 handling
  - Return `notFound()` when article doesn't exist
  - _Requirements: 8.5_

- [ ]* 6.5 Write property test for styling consistency
  - **Property 2: Styling consistency (Article Page)**
  - **Validates: Requirements 3.1, 3.2**
  - Compare rendered article pages before/after migration

- [ ]* 6.6 Write property test for image position
  - **Property 3: Image position application (Article)**
  - **Validates: Requirements 3.3, 9.4**
  - Verify imagePosition CSS is applied to featured images

---

## 7. Set Up Tina Admin Interface

- [ ] 7.1 Create admin route
  - Create `app/admin/[[...slug]]/page.tsx` for Tina admin
  - Configure Tina to render at /admin route
  - _Requirements: 6.1_

- [ ] 7.2 Configure Tina authentication
  - Set up Tina Cloud authentication
  - Configure auth middleware
  - Test login flow
  - _Requirements: 6.2_

- [ ] 7.3 Test content editing workflow
  - Create a test article through Tina admin
  - Edit an existing article
  - Verify git commits are created
  - _Requirements: 1.3, 6.4_

- [ ]* 7.4 Write property test for git commit creation
  - **Property 8: Git commit creation**
  - **Validates: Requirements 1.3, 6.4**
  - Save article through Tina, verify git commit exists with correct files

- [ ]* 7.5 Write property test for authentication
  - **Property 10: Authentication requirement**
  - **Validates: Requirements 6.2**
  - Attempt to access /admin without auth, verify login is required

---

## 8. Remove Old Blog Data Structure

- [ ] 8.1 Remove blogArticles.ts file
  - Delete `data/blogArticles.ts`
  - Remove any imports referencing it
  - _Requirements: 7.1_

- [ ] 8.2 Remove old blog page components
  - Delete individual blog page files (app/blog/1/page.tsx through app/blog/20/page.tsx)
  - Clean up unused components
  - _Requirements: 8.2_

- [ ] 8.3 Update imports across codebase
  - Search for any remaining references to old data structure
  - Update to use new blog data service
  - _Requirements: 4.1_

---

## 9. Testing and Validation

- [ ] 9.1 Run all property-based tests
  - Execute all property tests defined in previous tasks
  - Verify all properties pass
  - _Requirements: All_

- [ ]* 9.2 Write property test for URL routing
  - **Property 4: URL routing preservation**
  - **Validates: Requirements 8.1, 8.2, 8.3**
  - For IDs 1-20, verify /blog/[id] loads correct article

- [ ]* 9.3 Write property test for build-time reading
  - **Property 7: Build-time data reading**
  - **Validates: Requirements 4.1, 4.3, 4.5**
  - Generate random valid markdown files, run build, verify pages generated

- [ ]* 9.4 Write property test for type safety
  - **Property 9: Type safety enforcement**
  - **Validates: Requirements 10.3, 10.4**
  - Verify TypeScript catches missing fields at compile time

- [ ] 9.5 Manual testing checklist
  - Complete all items in manual testing checklist from design doc
  - Document any issues found
  - _Requirements: All_

---

## 10. Deployment and Documentation

- [ ] 10.1 Update deployment configuration
  - Ensure build command includes Tina setup
  - Configure environment variables in hosting platform
  - _Requirements: 6.3_

- [ ] 10.2 Create content editor documentation
  - Write guide for using Tina admin interface
  - Document how to create/edit articles
  - Include image upload instructions
  - _Requirements: 1.1_

- [ ] 10.3 Update README
  - Document new blog architecture
  - Add instructions for local development with Tina
  - Include environment variable setup
  - _Requirements: 6.3_

- [ ] 10.4 Deploy to production
  - Push changes to main branch
  - Verify automatic deployment succeeds
  - Test /admin access in production
  - _Requirements: 6.1, 6.2_

---

## 11. Final Checkpoint

- [ ] 11.1 Ensure all tests pass
  - Run full test suite
  - Verify no regressions
  - Ask user if questions arise
  - _Requirements: All_

- [ ] 11.2 Verify all 20 articles are accessible
  - Check each article URL manually
  - Verify styling matches original
  - Confirm images load correctly
  - _Requirements: 7.5, 8.2_

- [ ] 11.3 Performance check
  - Run Lighthouse audit
  - Verify build times are acceptable
  - Check page load speeds
  - _Requirements: 4.1_
