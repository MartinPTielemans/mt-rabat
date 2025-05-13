import { NextRequest } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret');
  if (secret !== process.env.MY_SECRET_TOKEN) {
    return new Response(JSON.stringify({ message: 'Invalid token' }), { status: 401 });
  }

  let path = '/';
  try {
    const body = await request.json();
    if (body.path && typeof body.path === 'string') {
      path = body.path;
    }
  } catch {
    // If no JSON body, default to '/'
  }

  revalidatePath(path);
  return Response.json({ revalidated: true, now: Date.now(), path });
} 