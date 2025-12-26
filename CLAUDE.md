# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static Next.js 15 website for MT Rabat, a Danish road service company. The project has been converted from a CMS-based system to use static content for better performance and simplified deployment.

## Architecture

### Tech Stack
- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS v4
- **Content**: Static TypeScript data files (no CMS)
- **Deployment**: Vercel-ready static generation

### Key Features
- Fully static site generation
- Custom Danish page routes (galleri, ydelser, kontakt, om-os, kompetencer)
- TypeScript throughout with strongly typed static content
- Tailwind CSS v4 with custom design system
- Performance optimized with static content

## Development Commands

### Start Development
```bash
# Start development server
bun run dev
```

### Build & Deploy
```bash
# Build for production
bun run build

# Start production server locally
bun run start

# Lint code
bun run lint
```

## Content Structure

All content is now stored in static TypeScript files located in `app/data/`:

- **staticContent.ts**: Main content for all pages including homepage, contact, services, about, competencies, and gallery
- **services.ts**: Service showcase data with before/after images

### Page Types
- **Homepage**: Hero section, main content, capabilities, contact section
- **Services**: List of services with descriptions, icons, and features
- **Contact**: Contact information, service areas, contact form configuration  
- **About**: Company description, values, contact info
- **Competencies**: Core competencies, technical expertise, experience stats, materials
- **Gallery**: Image galleries with categories and call-to-action

## File Structure

```
mt-rabat/
├── app/
│   ├── data/                 # Static content files
│   │   ├── staticContent.ts  # Main page content
│   │   └── services.ts       # Service showcase data
│   ├── components/           # React components
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   ├── galleri/             # Gallery page
│   ├── ydelser/             # Services page
│   ├── kontakt/             # Contact page
│   ├── om-os/               # About page
│   ├── kompetencer/         # Competencies page
│   └── sitemap.ts           # Static sitemap
├── public/
│   ├── images/              # Static images
│   └── logo/                # Company logo
├── package.json
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## Content Management

Since the site uses static content:

1. **Adding Content**: Edit the relevant TypeScript files in `app/data/`
2. **Images**: Add to `public/images/` and reference in content files
3. **Type Safety**: All content is strongly typed with TypeScript interfaces
4. **Validation**: TypeScript compiler ensures content structure is correct

## Development Workflow

1. **Content Changes**: Edit files in `app/data/`
2. **Testing**: Run `bun run dev` to test changes locally
3. **Building**: Run `bun run build` to verify static generation works
4. **Linting**: Always run `bun run lint` before commits

## Deployment

The project is configured for Vercel deployment with:
- Production URL: https://mt-rabat.vercel.app
- Automatic static generation
- No external dependencies or CMS required
- Fast loading with pre-generated static pages

## Migration Notes

This project was migrated from Sanity CMS to static content:
- All CMS content has been extracted and converted to TypeScript
- No database or external services required
- Improved performance with static generation
- Simplified deployment and maintenance