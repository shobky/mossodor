import { sendOrderConfirmationEmail } from "@/lib/utils/send-email";
import React from "react";

export default async function SendEmail() {
  await sendOrderConfirmationEmail("zashobky4@gmail.com");

  return <div>sending</div>;
}
