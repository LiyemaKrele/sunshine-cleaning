import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function sendBookingEmail(data: any) {
  // ✅ EMAIL TO BUSINESS (YOU)
  await transporter.sendMail({
    from: `Sunshine Cleaning <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    subject: "🧼 New Booking Received",
    html: `
      <h2>New Booking</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Address:</strong> ${data.address}</p>
      <p><strong>Service:</strong> ${data.service}</p>
      <p><strong>Date:</strong> ${data.date}</p>
      <p><strong>Time:</strong> ${data.time || "Not specified"}</p>
      <p><strong>Notes:</strong> ${data.notes || "None"}</p>
    `,
  });

  // ✅ EMAIL TO CLIENT (CONFIRMATION)
  await transporter.sendMail({
    from: `Sunshine Cleaning <${process.env.GMAIL_USER}>`,
    to: data.email,
    subject: "✅ Booking Confirmation - Sunshine Cleaning",
    html: `
      <h2>Hi ${data.name},</h2>

      <p>Thank you for booking with <strong>Sunshine Cleaning</strong>! 🧼</p>

      <p>Here are your booking details:</p>

      <ul>
        <li><strong>Service:</strong> ${data.service}</li>
        <li><strong>Date:</strong> ${data.date}</li>
        <li><strong>Time:</strong> ${data.time || "Not specified"}</li>
      </ul>

      <p>We will contact you shortly to confirm.</p>

      <p>— Sunshine Cleaning Team</p>
    `,
  });
}