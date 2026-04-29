import { NextResponse } from "next/server";
import { sendBookingEmail } from "@/lib/email";
import { supabaseAdmin } from "@/lib/supabase-admin";
import sanitizeHtml from "sanitize-html";
import { rateLimit } from "@/lib/rate-limit";

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for") ?? "unknown";

  const { success } = await rateLimit.limit(ip);

  if (!success) {
    return NextResponse.json(
      { error: "Too many requests. Please wait." },
      { status: 429 },
    );
  }

  try {
    const body = await req.json();

    const cleanData = {
      name: sanitizeHtml(body.name || ""),
      phone: sanitizeHtml(body.phone || ""),
      email: sanitizeHtml(body.email || ""),
      address: sanitizeHtml(body.address || ""),
      service: sanitizeHtml(body.service || ""),
      date: body.date,
      time: body.time,
      notes: sanitizeHtml(body.notes || ""),
    };

    // ✅ STRONG VALIDATION
    if (
      !cleanData.name ||
      !cleanData.phone ||
      !cleanData.email ||
      !cleanData.service ||
      !cleanData.date
    ) {
      return NextResponse.json(
        { error: "All required fields must be filled correctly" },
        { status: 400 },
      );
    }

    // ✅ SAVE
    const { error: dbError } = await supabaseAdmin.from("Bookings").insert([
      {
        name: cleanData.name,
        phone: cleanData.phone,
        email: cleanData.email,
        address: cleanData.address,
        service: cleanData.service,
        date: cleanData.date,
        time: cleanData.time,
        notes: cleanData.notes,
        status: "pending",
      },
    ]);

    if (dbError) {
      console.error("DB ERROR:", dbError);
      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }

    // ✅ EMAIL (non-blocking mindset)
    try {
      await sendBookingEmail(cleanData);
    } catch (emailError) {
      console.error("EMAIL FAILED:", emailError);
    }

    return NextResponse.json({
      success: true,
      message: "Booking received successfully",
    });
  } catch (error) {
    console.error("SERVER ERROR:", error);

    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
