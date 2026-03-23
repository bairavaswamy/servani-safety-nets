import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Configure Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // 1️⃣ Send to Servani Team (admin notification)
    const adminMailOptions = {
      from: `"Servani Safety Nets" <${process.env.GMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL || process.env.GMAIL_USER,
      cc: process.env.CC_EMAIL || "",
      subject: `📩 New Lead from ${name} - Servani Safety Nets`,
      html: `
        <div style="font-family:Arial, sans-serif; background-color:#f8f9fa; padding:20px;">
          <h2 style="color:#055b4e;">New Customer Inquiry</h2>
          <p style="font-size:15px;">A potential customer submitted a message through your website form.</p>
          <table style="border-collapse:collapse; width:100%; margin-top:10px;">
            <tr><td style="padding:6px;"><strong>Name:</strong></td><td>${name}</td></tr>
            <tr><td style="padding:6px;"><strong>Email:</strong></td><td>${email}</td></tr>
            <tr><td style="padding:6px;"><strong>Phone:</strong></td><td>${phone}</td></tr>
            <tr><td style="padding:6px;"><strong>Message:</strong></td><td>${message}</td></tr>
          </table>
          <hr style="margin:20px 0;" />
          <p style="font-size:13px; color:#555;">
            📍 Lead Source: <strong>Official Servani Safety Nets Website</strong><br/>
            Please follow up as soon as possible to ensure customer satisfaction.
          </p>
        </div>
      `,
    };

    // 2️⃣ Auto-Reply to Customer (Branded & Friendly)
    const userMailOptions = {
      from: `"Servani Safety Nets" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `✅ Your inquiry has been received — Servani Safety Nets`,
      html: `
        <div style="font-family:Arial, sans-serif; background-color:#f3faf6; padding:25px; border-radius:10px; color:#083c32;">
          <div style="text-align:center;">
            <img src="https://servanisafetynets.com/images/servani-logo.png" alt="Servani Safety Nets Logo" style="width:120px; margin-bottom:10px;" />
            <h2 style="color:#047857;">Thank You, ${name}!</h2>
            <p style="font-size:16px;">We’ve received your message and our expert team will contact you soon.</p>
          </div>

          <div style="background-color:white; border:1px solid #c8e6c9; border-radius:8px; padding:15px; margin-top:15px;">
            <h3 style="color:#065f46; margin-bottom:8px;">Your Message Summary:</h3>
            <ul style="line-height:1.8; list-style-type:none; padding-left:0;">
              <li><strong>Name:</strong> ${name}</li>
              <li><strong>Email:</strong> ${email}</li>
              <li><strong>Phone:</strong> ${phone}</li>
              <li><strong>Message:</strong> ${message}</li>
            </ul>
          </div>

          <div style="margin-top:20px;">
            <p>
              At <strong>Servani Safety Nets</strong>, we specialize in high-quality 
              <span style="color:#f59e0b;">Balcony Safety Nets, Invisible Grills, Sports Nets, Bird Nets, Construction Safety Nets</span> 
              and more — ensuring durable protection with expert installation.
            </p>
            <p>Our team will reach out to you shortly to discuss your needs and provide a quick quote.</p>
          </div>

          <hr style="margin:25px 0;" />
          <footer style="text-align:center; font-size:13px; color:#555;">
            <p><strong>Servani Safety Nets</strong><br/>
            📍 Bengaluru & Nearby Areas<br/>
            ☎️ <a href="tel:+917995792953" style="color:#047857; text-decoration:none;">+91 79957 92953</a><br/>
            🌐 <a href="https://servanisafetynets.com" style="color:#047857; text-decoration:none;">www.servanisafetynets.com</a></p>

            <p style="font-size:12px; color:#888;">This is an automated message. Please do not reply.</p>
          </footer>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
