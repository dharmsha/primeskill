import { NextResponse } from "next/server";
import { randomUUID } from "crypto";

export async function GET(request) {
  if (!request.nextUrl.pathname.endsWith("/enquiries")) {
    return NextResponse.json({ ok: true, service: "prime-skill-api" });
  }
  return NextResponse.json({ ok: true, enquiries: [] });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const name = String(body?.name || "").trim();
    const phone = String(body?.phone || "").trim();
    const course = String(body?.course || "").trim();
    const message = String(body?.message || "").trim();
    if (!name || !phone || !course) {
      return NextResponse.json({ ok: false, message: "नाम, मोबाइल नंबर और कोर्स चुनना जरूरी है" }, { status: 400 });
    }
    return NextResponse.json({
      ok: true,
      enquiry: { id: randomUUID(), name, phone, course, message, createdAt: new Date().toISOString() },
    }, { status: 201 });
  } catch (error) {
    console.error("Enquiry POST error", error);
    return NextResponse.json({ ok: false, message: "फॉर्म भेजने में समस्या आई" }, { status: 500 });
  }
}