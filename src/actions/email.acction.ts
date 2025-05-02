import { defineAction } from "astro:actions";
import { z } from "astro:schema";

import {
  MAILER_SERVICE,
  MAILER_EMAIL,
  MAILER_SECRET_KEY,
} from "astro:env/server";
import nodemailer, { type Transporter, type SendMailOptions } from "nodemailer";

export class EmailService {
  private transporter: Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: MAILER_SERVICE,
      auth: {
        user: MAILER_EMAIL,
        pass: MAILER_SECRET_KEY,
      },
      debug: true,
      logger: true,
    });

    

  }

  async sendEmail(options: SendMailOptions): Promise<boolean> {
    const { replyTo, subject, html } = options;

    try {
      const sentInformation = await this.transporter.sendMail({
        from: MAILER_EMAIL,
        replyTo: replyTo,
        to: MAILER_EMAIL,
        subject: subject,
        html: html,
      });
      

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

export const EmailSend = defineAction({
  accept: "form",
  input: z.object({
    email: z.string().email(),
    subject: z.string(),
    message: z.string(),
  }),
  handler: async ({ email, subject, message }) => {
    
    const emailService = new EmailService();

    const emailSent = await emailService.sendEmail({
      replyTo: email,
      subject: subject,
      html: `
        <div style="font-family: Arial, sans-serif; 
        color: #333; max-width: 600px; margin: 0 auto;
         padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #4A90E2; text-align: center;">Nuevo Mensaje de Contacto</h2>
          <p style="font-size: 16px; line-height: 1.6;">
            <strong>El cliente con el correo:</strong> 
            <a href="mailto:${email}" style="color: #4A90E2; text-decoration: none;">${email}</a>
          </p>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; margin-top: 20px;">
            <p style="font-size: 16px; line-height: 1.6; margin: 0;">
              <strong>Mensaje:</strong><br>
              ${message}
            </p>
          </div>
          <p style="text-align: center; margin-top: 20px; font-size: 14px; color: #777;">
            Este mensaje fue enviado a través del formulario de contacto.
          </p>
        </div>
      `,

    });
    return emailSent
  }
});
