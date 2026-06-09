import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { name, company, email, message, timeline, budget } = await req.json()

  if (!name || !company || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'Email service not configured' }, { status: 500 })
  }

  try {
    const { Resend } = await import('resend')
    const resend = new Resend(apiKey)

    await resend.emails.send({
      from: 'Valba Contact Form <onboarding@resend.dev>',
      to: 'heypaigedesign@gmail.com', // TODO: swap back to valba.app@etchworksdigital.com once Resend domain verified
      replyTo: email,
      subject: `New enquiry from ${name} — ${company}`,
      text: [
        `Name: ${name}`,
        `Company: ${company}`,
        `Email: ${email}`,
        `Timeline: ${timeline || 'Not specified'}`,
        `Budget: ${budget || 'Not specified'}`,
        '',
        message,
      ].join('\n'),
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Resend error:', err)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
