# Requirements Document

## Introduction

This document outlines the requirements for integrating a git-based CMS (Tina CMS) into the Warmpawz blog system while preserving all existing styling, animations, and user experience. The goal is to enable non-technical team members to manage blog content through a visual CMS interface while keeping all content in version control and maintaining the exact look and feel of the current implementation.

## Glossary

- **Tina CMS**: A git-based content management system that provides a visual editor interface and commits changes directly to the repository
- **Blog System**: The current Next.js-based blog implementation with grid view and individual article pages
- **Content Schema**: The structured definition of blog article fields in Tina's configuration
- **MDX**: Markdown with JSX - a format that allows embedding React components in markdown
- **Git-based CMS**: A CMS that stores content as files in a git repository rather than a database
- **Tina Cloud**: Optional hosting service for Tina's admin interface and media management
- **Content Collection**: A group of related content files (e.g., all blog articles)
- **Frontmatter**: Metadata at the top of markdown files (title, date, etc.)

## Requirements

### Requirement 1

**User Story:** As a content editor, I want to create and publish blog articles through a visual CMS interface that commits to git, so that I can manage content without touching code while maintaining version control.

#### Acceptance Criteria

1. WHEN a content editor accesses the Tina admin interface THEN the system SHALL display a user-friendly interface for creating and editing blog articles
2. WHEN a content editor creates a new article THEN the system SHALL provide fields for title, excerpt, content, featured image, read time, category, and image position
3. WHEN a content editor saves an article THEN the system SHALL commit the changes to the git repository with a descriptive commit message
4. WHEN a content editor uploads an image THEN the system SHALL store it in the public/images directory and commit it to git
5. WHERE the content editor previews changes THEN the system SHALL show a live preview without committing

### Requirement 2

**User Story:** As a developer, I want the blog grid view to maintain its exact current styling and behavior, so that the visual experience remains consistent after CMS integration.

#### Acceptance Criteria

1. WHEN the blog page loads THEN the system SHALL display articles in a 3-column grid (desktop) with equal-height cards
2. WHEN a user hovers over a blog card THEN the system SHALL apply the existing hover animation (scale 1.15, translate-y -2, shadow-lg)
3. WHEN the page scrolls on mobile THEN the system SHALL apply the existing GSAP scroll animation (scale 0.95 to 1.15)
4. WHEN displaying article images THEN the system SHALL respect the configured image position (objectPosition) for each article
5. WHEN the background color transitions THEN the system SHALL cycle through the three brand colors (#F69052, #FAD3B5, #FFF2E6) every 3 seconds

### Requirement 3

**User Story:** As a developer, I want individual article pages to maintain their exact current layout and styling, so that the reading experience remains unchanged after CMS integration.

#### Acceptance Criteria

1. WHEN an article page loads THEN the system SHALL display the article with the existing layout (header, featured image, content, footer)
2. WHEN rendering article content THEN the system SHALL apply the existing typography styles (prose, text-justify, leading-relaxed)
3. WHEN displaying the featured image THEN the system SHALL use the configured objectPosition value for that article
4. WHEN rendering text content THEN the system SHALL preserve paragraph breaks, formatting, and text structure
5. WHEN the back button is clicked THEN the system SHALL navigate to the blog grid view with proper routing

### Requirement 4

**User Story:** As a developer, I want to read blog content from markdown/MDX files in the repository, so that content is version-controlled and the site remains fast and SEO-friendly.

#### Acceptance Criteria

1. WHEN the site builds THEN the system SHALL read all blog article files from the content directory
2. WHEN an article file is updated in git THEN the system SHALL reflect changes on the next deployment
3. WHEN reading article data THEN the system SHALL parse frontmatter for metadata (title, excerpt, image, readTime, category, imagePosition)
4. WHEN rendering article content THEN the system SHALL convert markdown/MDX to HTML with proper styling
5. WHERE file parsing fails THEN the system SHALL implement proper error handling and skip invalid files

### Requirement 5

**User Story:** As a content editor, I want to write rich article content with proper formatting in markdown, so that articles remain readable and well-structured.

#### Acceptance Criteria

1. WHEN editing article content THEN the system SHALL provide a rich text editor with markdown support
2. WHEN adding text formatting THEN the system SHALL support markdown syntax (bold, italic, headings, lists)
3. WHEN creating content structure THEN the system SHALL preserve paragraph breaks and spacing
4. WHEN saving content THEN the system SHALL store it as markdown in the article file
5. WHEN rendering content on the frontend THEN the system SHALL convert markdown to properly styled HTML paragraphs

### Requirement 6

**User Story:** As a developer, I want to configure Tina CMS with proper authentication and access control, so that only authorized users can edit content.

#### Acceptance Criteria

1. WHEN deploying Tina admin THEN the system SHALL host it at /admin route in the Next.js application
2. WHEN a user accesses /admin THEN the system SHALL require authentication via Tina Cloud or local auth
3. WHEN configuring the project THEN the system SHALL use environment variables for Tina Cloud credentials
4. WHEN editors make changes THEN the system SHALL commit to git with the editor's identity
5. WHERE multiple editors exist THEN the system SHALL support user management through Tina Cloud

### Requirement 7

**User Story:** As a developer, I want to migrate existing blog articles to markdown files, so that all current content is preserved and manageable through the CMS.

#### Acceptance Criteria

1. WHEN migrating articles THEN the system SHALL convert all 20 existing articles to markdown files with frontmatter
2. WHEN preserving content THEN the system SHALL maintain exact text, formatting, and structure
3. WHEN organizing files THEN the system SHALL store articles in a content/blog directory with numeric filenames (1.mdx, 2.mdx, etc.)
4. WHEN setting metadata THEN the system SHALL include all required frontmatter fields (title, excerpt, image, readTime, category, imagePosition)
5. WHEN migration completes THEN the system SHALL verify all articles render identically to the current implementation

### Requirement 8

**User Story:** As a developer, I want to maintain the current blog routing structure, so that existing URLs continue to work and SEO is preserved.

#### Acceptance Criteria

1. WHEN accessing /blog THEN the system SHALL display the blog grid view
2. WHEN accessing /blog/[id] THEN the system SHALL display the individual article page
3. WHEN generating article URLs THEN the system SHALL use sequential numeric IDs (1, 2, 3, etc.)
4. WHEN a user navigates between pages THEN the system SHALL use Next.js client-side routing
5. WHERE an article ID doesn't exist THEN the system SHALL display a 404 page

### Requirement 9

**User Story:** As a content editor, I want to control the image position for article featured images, so that the most important part of each image is visible in both grid and article views.

#### Acceptance Criteria

1. WHEN editing an article THEN the system SHALL provide a field to specify image position (e.g., "30%", "center", "top")
2. WHEN setting image position THEN the system SHALL accept CSS objectPosition values
3. WHEN rendering in grid view THEN the system SHALL apply the configured position to the card image
4. WHEN rendering in article view THEN the system SHALL apply the configured position to the featured image
5. WHERE no position is specified THEN the system SHALL default to "center 30%"

### Requirement 10

**User Story:** As a developer, I want to implement proper TypeScript types for blog content, so that the codebase remains type-safe and maintainable.

#### Acceptance Criteria

1. WHEN defining Tina schemas THEN the system SHALL generate TypeScript types automatically
2. WHEN reading markdown files THEN the system SHALL use properly typed interfaces for frontmatter
3. WHEN rendering components THEN the system SHALL enforce type safety for all props
4. WHEN building the project THEN the system SHALL catch type errors at compile time
5. WHERE schema changes occur THEN the system SHALL update TypeScript types accordingly
