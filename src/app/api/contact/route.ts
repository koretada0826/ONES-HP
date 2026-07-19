import { NextResponse } from "next/server";

interface ContactPayload {
  company?: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
}

function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(req: Request) {
  let body: ContactPayload;
  try {
    body = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const { company, name, email, phone, message } = body || ({} as ContactPayload);
  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "missing_required_fields" },
      { status: 400 }
    );
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }
  if (message.length > 4000) {
    return NextResponse.json({ ok: false, error: "too_long" }, { status: 400 });
  }

  // TODO: wire up real delivery. Options:
  //   - Resend / SendGrid  (RESEND_API_KEY etc.)
  //   - Google Apps Script webhook (fetch to CONTACT_WEBHOOK_URL)
  //   - Slack Webhook       (fetch to SLACK_WEBHOOK_URL)
  // For now we log server-side so the deploy platform captures the submission.
  console.log("[contact]", {
    at: new Date().toISOString(),
    company,
    name,
    email,
    phone,
    message,
  });

  return NextResponse.json({ ok: true });
}
