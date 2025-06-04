import { revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Verify the request is from Sanity (optional but recommended)
    const webhookSecret = process.env.SANITY_WEBHOOK_SECRET
    const signature = request.headers.get('sanity-webhook-signature')
    
    if (webhookSecret && signature !== webhookSecret) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    // Revalidate all pages - you can be more specific if needed
    revalidateTag('sanity')
    
    // You can also trigger a full rebuild via Vercel's deploy hook
    const deployHookUrl = process.env.VERCEL_DEPLOY_HOOK_URL
    if (deployHookUrl) {
      await fetch(deployHookUrl, { method: 'POST' })
    }

    return NextResponse.json({ 
      message: 'Revalidated successfully',
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Error in revalidate webhook:', error)
    return NextResponse.json(
      { message: 'Error revalidating' },
      { status: 500 }
    )
  }
} 