import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Set UNDER_CONSTRUCTION=true in environment to enable redirect
const UNDER_CONSTRUCTION = process.env.UNDER_CONSTRUCTION === 'true';

export function proxy(request: NextRequest) {
  if (!UNDER_CONSTRUCTION) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  // Allow access to the under-construction page itself
  if (pathname === '/under-construction') {
    return NextResponse.next();
  }

  // Allow static assets, images, api routes, and Next.js internals
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/logo') ||
    pathname === '/favicon.ico' ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml'
  ) {
    return NextResponse.next();
  }

  // Redirect all other routes to the under construction page
  return NextResponse.redirect(new URL('/under-construction', request.url));
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image).*)',
  ],
};
