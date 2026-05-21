import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = "techxserve@gmail.com";
const FROM_EMAIL = "noreply@techxserve.com";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, email, company, service, message, phone, budget } = body;

    if (!fullName || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const extraRows = [
      phone   && `<tr><td style="padding:6px 0;color:#71717a;font-size:13px;width:140px">Phone</td><td style="padding:6px 0;font-size:13px">${phone}</td></tr>`,
      company && `<tr><td style="padding:6px 0;color:#71717a;font-size:13px">Company</td><td style="padding:6px 0;font-size:13px">${company}</td></tr>`,
      service && `<tr><td style="padding:6px 0;color:#71717a;font-size:13px">Service</td><td style="padding:6px 0;font-size:13px">${service}</td></tr>`,
      budget  && `<tr><td style="padding:6px 0;color:#71717a;font-size:13px">Budget</td><td style="padding:6px 0;font-size:13px">${budget}</td></tr>`,
    ].filter(Boolean).join("");

    // Internal notification
    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `New enquiry from ${fullName}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;background:#fff;border:1px solid #e4e4e7;border-radius:12px;overflow:hidden">
          <div style="background:#CC0000;padding:24px 28px">
            <span style="color:#fff;font-size:18px;font-weight:700">New Enquiry — TechxServe</span>
          </div>
          <div style="padding:28px">
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:6px 0;color:#71717a;font-size:13px;width:140px">Name</td><td style="padding:6px 0;font-size:13px;font-weight:600">${fullName}</td></tr>
              <tr><td style="padding:6px 0;color:#71717a;font-size:13px">Email</td><td style="padding:6px 0;font-size:13px"><a href="mailto:${email}" style="color:#CC0000">${email}</a></td></tr>
              ${extraRows}
            </table>
            <div style="margin-top:20px;padding:16px;background:#f4f4f5;border-radius:8px;font-size:13px;line-height:1.6;white-space:pre-wrap">${message}</div>
          </div>
        </div>
      `,
    });

    // Confirmation to user
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "We've received your message — TechxServe",
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;background:#fff;border:1px solid #e4e4e7;border-radius:12px;overflow:hidden">
          <div style="background:#CC0000;padding:24px 28px">
            <span style="color:#fff;font-size:18px;font-weight:700">TechxServe</span>
          </div>
          <div style="padding:28px">
            <p style="font-size:15px;font-weight:600;color:#18181b;margin:0 0 12px">Hi ${fullName},</p>
            <p style="font-size:14px;color:#52525b;line-height:1.7;margin:0 0 16px">
              Thanks for reaching out! We've received your message and will get back to you within <strong>one business day</strong>.
            </p>
            <p style="font-size:14px;color:#52525b;line-height:1.7;margin:0 0 24px">
              In the meantime, feel free to browse our services at
              <a href="https://techxserve.com" style="color:#CC0000">techxserve.com</a>.
            </p>
            <p style="font-size:13px;color:#a1a1aa;margin:0">— The TechxServe Team</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
