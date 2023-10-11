import { IEmailSender } from "../../../protocols/email-sender.interface";
import { HandlebarsTemplateCompiler } from "../../handlebars/handlebars-template-compiler.service";
import { BrevoMailService } from "./brevo-mail.service";

export const makeBrevoMailService = (): IEmailSender => {
  return new BrevoMailService(new HandlebarsTemplateCompiler());
};
