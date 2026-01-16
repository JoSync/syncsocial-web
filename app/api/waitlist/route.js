import { NextResponse } from 'next/server';

export async function POST(req) {
  console.log("--- START EMAIL POGING ---");
  
  try {
    const { email } = await req.json();
    console.log("Ontvangen email van formulier:", email);

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("KRITIEKE FOUT: RESEND_API_KEY is niet gevonden in Vercel!");
      return NextResponse.json({ error: 'Systeeminstelling fout (API Key missing)' }, { status: 500 });
    }
    console.log("API Key is aanwezig (begint met:", apiKey.substring(0, 5), "...)");

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: 'SyncSocial <onboarding@resend.dev>',
        to: [email],
        subject: 'Welcome to SyncSocial.ai!',
        html: `<p>Welcome to the waitlist for SyncSocial.ai!</p>`,
      }),
    });

    const status = res.status;
    const data = await res.json();
    
    console.log("Resend Status Code:", status);
    console.log("Resend Antwoord Data:", JSON.stringify(data));

    if (res.ok) {
      console.log("--- SUCCESS: Email verstuurd! ---");
      return NextResponse.json({ success: true });
    } else {
      console.error("--- RESEND FOUT ---", data);
      return NextResponse.json({ error: 'Resend weigert aanvraag', details: data }, { status: status });
    }
  } catch (err) {
    console.error("--- SYSTEEM FOUT ---", err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
