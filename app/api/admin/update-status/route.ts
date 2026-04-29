import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";
import nodemailer from "nodemailer";
import { verifyAdmin } from "@/lib/auth";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

async function sendStatusEmail(booking: any, status: string) {
  let subject = "";
  let message = "";

  if (status === "confirmed") {
    subject = "✅ Booking Confirmed";
    message = `Hi ${booking.name}, your booking has been CONFIRMED. We will see you on ${booking.date} at ${booking.time}.`;
  }

  if (status === "cancelled") {
    subject = "❌ Booking Cancelled";
    message = `Hi ${booking.name}, unfortunately your booking has been CANCELLED. Please contact us to reschedule.`;
  }

  if (status === "completed") {
    subject = "🎉 Booking Completed";
    message = `Hi ${booking.name}, your cleaning service has been COMPLETED. Thank you for choosing Sunshine Cleaning!`;
  }

  if (!subject) return;

  await transporter.sendMail({
    from: `Sunshine Cleaning <${process.env.GMAIL_USER}>`,
    to: booking.email,
    subject,
    html: `
      <div>
        <h2>${subject}</h2>
        <p>${message}</p>
      </div>
    `,
  });
}

export async function POST(req: Request) {
  if (!verifyAdmin(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id, status } = await req.json();

  // 1. Fetch booking
  const { data: booking, error: fetchError } = await supabaseAdmin
    .from("Bookings")
    .select("*")
    .eq("id", id)
    .single();

  if (fetchError || !booking) {
    return NextResponse.json({ error: "Booking not found" }, { status: 404 });
  }

  // 2. Update
  const { error } = await supabaseAdmin
    .from("Bookings")
    .update({ status })
    .eq("id", id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // 3. Send email
  try {
    await sendStatusEmail(booking, status);
  } catch (e) {
    console.error("Email failed:", e);
  }

  return NextResponse.json({ success: true });
}
