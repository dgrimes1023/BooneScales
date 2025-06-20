import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, phone, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: "Contact Form <info@boonescales.com>", // or your verified sender
      to: "info@boonescales.com", // your real email
      subject: `New Message from ${name}`,
      replyTo: email,
      text: `Name: ${name}\n\nEmail: ${email}\n\nPhone: ${phone}\n\nMessage: ${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}