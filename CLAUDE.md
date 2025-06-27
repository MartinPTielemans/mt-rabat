# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a monorepo containing a Next.js frontend and Sanity CMS studio for MT Rabat, a Danish website built with Next.js 15, React 19, and Sanity CMS. The project uses pnpm workspaces for monorepo management.

## Architecture

### Monorepo Structure
- **Root**: Contains workspace configuration and shared scripts
- **frontend/**: Next.js application with App Router
- **studio/**: Sanity CMS studio for content management

### Tech Stack
- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS v4
- **CMS**: Sanity CMS with Visual Editing and Presentation Tool
- **Package Manager**: pnpm with workspaces
- **Styling**: Tailwind CSS with custom color palette and typography plugin

### Key Features
- Monorepo architecture with pnpm workspaces
- Sanity CMS integration with live preview and visual editing
- Custom Danish page routes (galleri, ydelser, kontakt, om-os, kompetencer)
- TypeScript throughout with auto-generated Sanity types
- Tailwind CSS v4 with custom design system

## Development Commands

### Start Development
```bash
# Start both frontend and studio in parallel
pnpm run dev

# Start individual services
pnpm --filter frontend dev    # Frontend only (port 3000)
pnpm --filter studio dev      # Studio only (port 3333)
```

### Build & Deploy
```bash
# Build frontend
pnpm --filter frontend build

# Build studio
pnpm --filter studio build
```

### Type Generation & Linting
```bash
# Generate Sanity types (run from frontend/)
pnpm --filter frontend typegen

# Lint frontend
pnpm --filter frontend lint
```

### Data Management
```bash
# Import sample data to Sanity
pnpm run import-sample-data
```

## Environment Variables

Required environment variables:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`: Sanity project ID
- `NEXT_PUBLIC_SANITY_DATASET`: Sanity dataset (usually "production")
- `NEXT_PUBLIC_SANITY_API_VERSION`: API version (defaults to "2024-10-28")
- `NEXT_PUBLIC_SANITY_STUDIO_URL`: Studio URL (defaults to "http://localhost:3333")

## Content Structure

### Page Types
- **homepage**: Main landing page
- **galleryPage**: Gallery page (/galleri)
- **servicesPage**: Services page (/ydelser)
- **contactPage**: Contact page (/kontakt)
- **aboutPage**: About page (/om-os)
- **competenciesPage**: Competencies page (/kompetencer)

### Sanity Schema
- **Documents**: page, person, post
- **Singletons**: homepage, aboutPage, contactPage, etc.
- **Objects**: blockContent, callToAction, infoSection, link

## Development Workflow

1. **Content Changes**: Use Sanity Studio at localhost:3333 for content editing
2. **Type Safety**: Run `pnpm --filter frontend typegen` after schema changes
3. **Visual Editing**: Use Sanity's Presentation Tool for live preview
4. **Testing**: Always run `pnpm --filter frontend lint` before commits

## File Structure Notes

- `frontend/sanity/`: Sanity client configuration and queries
- `studio/src/schemaTypes/`: Sanity schema definitions
- `frontend/app/`: Next.js App Router pages and components
- Page components follow Danish naming convention for routes

## Deployment

The project is configured for Vercel deployment with:
- Production URL: https://mt-rabat.vercel.app
- Webhook integration for automatic redeployment on content changes
- Environment variables configured in Vercel dashboard