# MT Rabat - Danish Road Maintenance Website

A modern website for MT Rabat (Marcel Tielemans), a Danish road maintenance company specializing in ditch maintenance and road drainage.

## Features

- **Nuxt 3** with Vue 3 Composition API
- **Nuxt Content** for file-based CMS using YAML
- **Nuxt Studio** for visual editing capabilities
- **Tailwind CSS** for styling
- **Nuxt Image** for optimized image handling
- **Responsive design** for all devices
- **Danish localization** throughout

## Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Generate static site
pnpm generate
```

## Content Management

Content is managed through YAML files in the `content/` directory:

- `content/index.yml` - Homepage content
- `content/galleri.yml` - Gallery page
- `content/ydelser.yml` - Services page
- `content/kontakt.yml` - Contact page
- `content/om-os.yml` - About page
- `content/kompetencer.yml` - Competencies page

## Visual Editing

For non-technical users, Nuxt Studio provides inline editing:

1. Add `?studio=true` to any page URL
2. Click on content elements to edit them directly
3. Changes are saved to the YAML files

## Pages

### Danish Route Structure
- `/` - Forside (Homepage)
- `/galleri` - Billeder af projekter (Project Gallery)
- `/ydelser` - Vores ydelser (Our Services)
- `/kontakt` - Kontakt os (Contact Us)
- `/om-os` - Om Marcel Tielemans (About Us)
- `/kompetencer` - Tekniske kompetencer (Technical Competencies)

### Key Features by Page
- **Homepage**: Hero section, feature highlights, competencies overview
- **Gallery**: Filterable image gallery with lightbox functionality
- **Services**: Detailed service descriptions with feature lists
- **Contact**: Contact form, business information, service areas
- **About**: Company history, values, and contact details
- **Competencies**: Technical expertise, equipment, and experience stats

## Deployment

Recommended deployment platforms:
- **Vercel** (recommended for automatic deployments)
- **Netlify**
- **Cloudflare Pages**
- Any static hosting provider

For Vercel deployment:
1. Connect your GitHub repository
2. Vercel will auto-detect Nuxt and configure build settings
3. Deploy automatically on every push to main branch

## Development

The project structure:
```
├── content/          # YAML content files
├── pages/           # Vue page components
├── layouts/         # Site layouts
├── components/      # Reusable Vue components (if needed)
├── assets/          # CSS and other assets
├── public/          # Static files (images, etc.)
├── nuxt.config.ts   # Nuxt configuration
└── tailwind.config.js # Tailwind CSS configuration
```

## Content Editing

### For Developers
Edit the YAML files in the `content/` directory directly.

### For Non-Technical Users
1. Open the website
2. Add `?studio=true` to the URL
3. Click on any text or content to edit it inline
4. Changes are automatically saved

## Environment Variables

No environment variables required for basic functionality. All content is managed through local YAML files.

## License

Private project for MT Rabat.