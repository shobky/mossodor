import nodemailer from "nodemailer";
import { OrderConfirmationEmail } from "@/emails/order-confirmation-email";
import { render } from "@react-email/components";
import { IOrder } from "../types";

export const sendOrderConfirmationEmail = async (
  userEmail: string,
  order?: IOrder
) => {
  try {
    if (!order) return;
    // Create a Nodemailer transporter using SMTP
    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_EMAIL_HOST, // Your SMTP server hostname
      port: Number(process.env.SMTP_EMAIL_HOST), // Port for secure SMTP (TLS)
      secure  : false, // true for 465, false for other ports
      auth: {
        user: process.env.SENDER_EMAIL, // Your email address
        pass: process.env.SENDER_EMAIL_PASSWORD, // Your email password or app-specific password
      },
    });

    // Render React component to HTML string
    const emailHtml = render(<OrderConfirmationEmail order={order} />);

    // Send mail with defined transport object
    let info = await transporter.sendMail({
      from: process.env.SENDER_EMAIL, // Sender address
      to: userEmail, // List of recipients
      subject: `Confirming Your Order`, // Subject line
      html: emailHtml,
    });

    console.log("Message sent: %s", info.messageId);
  } catch (err) {
    console.error("Error sending email:", err);
  }
};
