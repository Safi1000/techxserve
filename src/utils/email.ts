const FROM = "TechxServe Enterprise <noreply@techxserve.com>";
const ADMIN_EMAIL = "techxserve@gmail.com";
const LOGO_URL = "https://techxserve.com/logo.png";

export function escapeHtml(s: string): string {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function fieldRow(label: string, value: string | undefined | null): string {
  if (!value) return "";
  return `
    <tr>
      <td style="padding:14px 16px;background:#fafafa;font-weight:600;color:#374151;border-bottom:1px solid #f0f0f0;width:35%;vertical-align:top;font-size:14px;">${escapeHtml(label)}</td>
      <td style="padding:14px 16px;color:#111827;border-bottom:1px solid #f0f0f0;font-size:14px;line-height:1.5;">${escapeHtml(value)}</td>
    </tr>
  `;
}

export function rawFieldRow(label: string, valueHtml: string): string {
  return `
    <tr>
      <td style="padding:14px 16px;background:#fafafa;font-weight:600;color:#374151;border-bottom:1px solid #f0f0f0;width:35%;vertical-align:top;font-size:14px;">${escapeHtml(label)}</td>
      <td style="padding:14px 16px;color:#111827;border-bottom:1px solid #f0f0f0;font-size:14px;line-height:1.5;">${valueHtml}</td>
    </tr>
  `;
}

function wrapEmail(preheader: string, bodyHtml: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>TechxServe Enterprise</title>
</head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <span style="display:none !important;visibility:hidden;opacity:0;color:transparent;height:0;width:0;font-size:1px;line-height:1px;">${escapeHtml(preheader)}</span>
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background:#f3f4f6;padding:40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 8px 24px rgba(0,0,0,0.06);">
          <tr>
            <td style="background:linear-gradient(135deg,#820507 0%,#a31e22 100%);padding:36px 32px;text-align:center;">
              <img src="${LOGO_URL}" alt="TechxServe" width="72" height="72" style="display:block;margin:0 auto 14px;border-radius:14px;background:#ffffff;padding:10px;box-sizing:border-box;">
              <h1 style="color:#ffffff;font-size:22px;margin:0;font-weight:700;letter-spacing:-0.3px;">TechxServe Enterprise</h1>
              <p style="color:rgba(255,255,255,0.85);font-size:13px;margin:6px 0 0;letter-spacing:0.5px;text-transform:uppercase;">Future-Ready Technology Solutions</p>
            </td>
          </tr>
          <tr>
            <td style="padding:40px 36px;color:#111827;font-size:15px;line-height:1.65;">
              ${bodyHtml}
            </td>
          </tr>
          <tr>
            <td style="background:#fafafa;padding:28px 32px;text-align:center;border-top:1px solid #f0f0f0;">
              <p style="color:#374151;font-size:13px;margin:0 0 6px;font-weight:600;">TechxServe Enterprise LLC</p>
              <p style="color:#6b7280;font-size:13px;margin:0 0 10px;line-height:1.5;">30 N Gould St Ste N, Sheridan, WY 82801</p>
              <p style="color:#6b7280;font-size:13px;margin:0;">
                <a href="mailto:info@techxserve.com" style="color:#820507;text-decoration:none;font-weight:500;">info@techxserve.com</a>
                &nbsp;·&nbsp;
                <a href="tel:+13072939151" style="color:#820507;text-decoration:none;font-weight:500;">+1 (307) 293-9151</a>
                &nbsp;·&nbsp;
                <a href="https://techxserve.com" style="color:#820507;text-decoration:none;font-weight:500;">techxserve.com</a>
              </p>
              <p style="color:#9ca3af;font-size:11px;margin:18px 0 0;">© 2025 TechxServe Enterprise LLC. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function summaryTable(rowsHtml: string): string {
  return `
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="border-collapse:collapse;border:1px solid #f0f0f0;border-radius:8px;overflow:hidden;margin:20px 0;">
      ${rowsHtml}
    </table>
  `;
}

export function detailsBlock(label: string, content: string): string {
  return `
    <h3 style="color:#820507;font-size:15px;font-weight:600;margin:24px 0 10px;text-transform:uppercase;letter-spacing:0.5px;">${escapeHtml(label)}</h3>
    <div style="background:#fafafa;border-left:3px solid #820507;padding:14px 16px;border-radius:4px;color:#374151;font-size:14px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(content)}</div>
  `;
}

async function postEmail(payload: Record<string, unknown>): Promise<void> {
  const res = await fetch("/api/send-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(
      (error as { error?: string; message?: string })?.error ||
      (error as { error?: string; message?: string })?.message ||
      `Email failed (${res.status})`
    );
  }
}

export async function sendAdminNotification(opts: {
  subject: string;
  bodyHtml: string;
  customerEmail: string;
  preheader?: string;
}): Promise<void> {
  await postEmail({
    from: FROM,
    to: [ADMIN_EMAIL],
    subject: `[TechxServe] ${opts.subject}`,
    html: wrapEmail(opts.preheader || opts.subject, opts.bodyHtml),
    reply_to: opts.customerEmail,
  });
}

export async function sendCustomerConfirmation(opts: {
  to: string;
  subject: string;
  bodyHtml: string;
  preheader?: string;
}): Promise<void> {
  await postEmail({
    from: FROM,
    to: [opts.to],
    subject: opts.subject,
    html: wrapEmail(opts.preheader || opts.subject, opts.bodyHtml),
  });
}

export async function sendDualEmails(opts: {
  adminSubject: string;
  adminBodyHtml: string;
  customerEmail: string;
  customerSubject: string;
  customerBodyHtml: string;
}): Promise<void> {
  await sendAdminNotification({
    subject: opts.adminSubject,
    bodyHtml: opts.adminBodyHtml,
    customerEmail: opts.customerEmail,
  });
  try {
    await sendCustomerConfirmation({
      to: opts.customerEmail,
      subject: opts.customerSubject,
      bodyHtml: opts.customerBodyHtml,
    });
  } catch (err) {
    console.warn("Customer confirmation failed (admin already notified):", err);
  }
}
