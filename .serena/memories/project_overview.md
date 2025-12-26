# MT Rabat - Project Overview

## Purpose
Static Next.js 15 website for MT Rabat, a Danish road service company (vejservice). The project uses static content for better performance and simplified deployment.

## Tech Stack
- **Framework**: Next.js 15 with React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Email**: Resend
- **Package Manager**: bun
- **Deployment**: Vercel

## Project Structure
```
mt-rabat/
├── app/
│   ├── data/           # Static content (staticContent.ts, services.ts)
│   ├── components/     # React components
│   ├── api/           # API routes
│   ├── galleri/       # Gallery page (Danish)
│   ├── ydelser/       # Services page (Danish)
│   ├── kontakt/       # Contact page (Danish)
│   ├── om-os/         # About page (Danish)
│   └── kompetencer/   # Competencies page (Danish)
├── public/            # Static assets (images, logo)
└── .serena/          # Serena configuration
```

## Key Features
- Fully static site generation
- Danish page routes
- TypeScript throughout with strongly typed static content
- Custom design system with Tailwind CSS v4
- Performance optimised with static content
