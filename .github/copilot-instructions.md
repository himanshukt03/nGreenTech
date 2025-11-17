# AI Agent Instructions for the nGreenTech Website Codebase

This document provides essential guidance for AI agents working on this codebase. Understanding these conventions will help you be more effective and generate code that aligns with the project's architecture and style.

## 1. Project Overview & Tech Stack

This is a Next.js 13+ marketing website for nGreenTech.

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with a custom theme.
- **Theming**: Light/Dark mode support using `next-themes`.
- **Content**: Currently uses static data, with hints of future integration with Sanity.io.

**Key Files:**
- `app/`: Contains all routes and pages (Next.js App Router).
- `components/`: Contains all reusable React components, organized by feature.
- `tailwind.config.js`: Defines the project's design system (colors, spacing, etc.).
- `types/`: Contains all TypeScript type definitions.
- `app/providers.tsx`: Crucial file for theme setup.

## 2. Development Workflow

- **To run the development server**:
  ```bash
  npm run dev
  ```
- **To create a production build**:
  ```bash
  npm run build
  ```
- **To run the linter**:
  ```bash
  npm run lint
  ```

## 3. Architecture & Patterns

### Routing and Page Structure
The project uses the Next.js App Router. Each folder inside `app/` corresponds to a URL segment.
- `app/layout.tsx` is the root layout for the entire application.
- `app/page.tsx` is the homepage.
- New pages should be created by adding a new folder with a `page.tsx` file inside the `app` directory.

### Component Organization
Components are located in `components/` and are grouped by feature. For example, all blog-related components are in `components/Blog/`. When creating a new component, place it in the appropriate feature folder or create a new one.

### Styling with Tailwind CSS
We use Tailwind CSS for all styling. The project has a detailed custom theme defined in `tailwind.config.js`.
- **Always use theme values** for colors (`primary`, `body-color`), fonts, and spacing to maintain consistency.
- **Example**: To set the primary background color, use `bg-primary`, not a hardcoded hex value.
- Dark mode is handled by the `dark:` variant in Tailwind, powered by `next-themes`. The `ThemeProvider` is configured in `app/providers.tsx`.

### Data Handling
Currently, much of the data is stored statically within the components directory.
- **Example**: The blog posts on the homepage are sourced from `components/Blog/blogData.tsx`. This file exports a function that returns an array of blog objects.
- When adding or modifying content for features like the blog, testimonials, or team members, look for a corresponding `*Data.tsx` file first.
- The `next.config.js` file is configured for images from `cdn.sanity.io`, suggesting that a headless CMS is a potential future data source. Be mindful of this when implementing new features that might require dynamic content.

### Theming and Dark Mode
The application supports light and dark modes.
- The `ThemeProvider` is set up in `app/providers.tsx`.
- The theme can be toggled. A `ThemeToggler` component likely exists or can be created to switch between themes.
- All UI components should be tested in both light and dark modes. Use `dark:` utility classes in your Tailwind CSS.
