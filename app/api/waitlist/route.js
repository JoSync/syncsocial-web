import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { email } = await req.json();
    
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'SyncSocial <onboarding@resend.dev>',
        to: [email],
        subject: 'Welcome to SyncSocial.ai!',
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 40px; border-radius: 20px;">
            <h1 style="color: #4338ca; font-size: 24px;">Welcome to the future of engagement!</h1>
            <p>Thanks for joining the <strong>SyncSocial.ai</strong> waitlist.</p>
            <p>We are currently in a closed beta phase, synchronizing the lives of the world's most innovative creators. You are now officially on the list!</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
            <p style="font-size: 12px; color: #999; text-transform: uppercase; letter-spacing: 1px;">© 2026 SyncSocial.ai — Intelligence Synchronized.</p>
          </div>
        `,
      }),
    });

    if (res.ok) {
      return NextResponse.json({ success: true });
    } else {
      const errorData = await res.json();
      return NextResponse.json({ error: 'Resend rejected request', details: errorData }, { status: 500 });
    }
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
