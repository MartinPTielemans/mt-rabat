# MT Rabat - Nuxt Version

This is the Nuxt.js version of the MT Rabat website using Nuxt Content for CMS functionality and Nuxt Studio for visual editing.

## Features

- **Nuxt 3** with Vue 3 Composition API
- **Nuxt Content** for file-based CMS (YAML/Markdown)
- **Nuxt Studio** for visual editing
- **Tailwind CSS** for styling
- **Nuxt Image** for optimized images
- **Nuxt Icon** for iconography

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev:nuxt

# Build for production
pnpm build:nuxt
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

With Nuxt Studio enabled, your dad can:
1. Open the website with `?studio=true` parameter
2. Click on content elements to edit them inline
3. Changes are saved directly to the YAML files

## Deployment

The app can be deployed to:
- Vercel (recommended)
- Netlify
- Any Node.js hosting

## Pages

- `/` - Homepage with hero, features, and contact CTA
- `/galleri` - Image gallery with filtering
- `/ydelser` - Services overview
- `/kontakt` - Contact information and form
- `/om-os` - About the company
- `/kompetencer` - Technical competencies

## Comparison to Next.js Version

### Pros:
- Simpler content management (YAML files)
- Git-based content versioning
- No external CMS dependencies
- Vue.js ecosystem
- Better SSG performance

### Cons:
- Less sophisticated visual editing than Sanity
- No advanced content relationships
- Manual content structure management
- Learning curve for Vue.js if coming from React