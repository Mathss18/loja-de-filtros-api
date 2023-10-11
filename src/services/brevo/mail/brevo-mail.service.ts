import {
  EmailSenderParamsType,
  IEmailSender,
} from "../../../protocols/email-sender.interface";
import { TemplateCompiler } from "../../../protocols/template-compiler";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export class BrevoMailService implements IEmailSender {
  constructor(private readonly templateCompiler: TemplateCompiler) {}
  async sendEmail(params: EmailSenderParamsType) {
    const { to, subject, text, html } = params;

    const transport = nodemailer.createTransport({
      host: process.env.MAIL_AUTH_HOST,
      port: Number(process.env.MAIL_AUTH_PORT),
      auth: {
        user: process.env.MAIL_AUTH_USER,
        pass: process.env.MAIL_AUTH_PASS,
      },
    });

    let mailOptions: Mail.Options = {
      from: `"Loja de Filtros" <${process.env.MAIL_FROM}>`,
      to,
      subject,
      text,
    };

    if (html) {
      const { template, data } = html;
      const compiledTemplate = this.templateCompiler.compile(template, data);
      mailOptions.html = compiledTemplate;
    }

    transport.sendMail(mailOptions, (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
      console.log(response);
    });
  }
}
