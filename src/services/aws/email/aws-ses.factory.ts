import { IEmailSender } from "../../../protocols/email-sender.interface";
import { HandlebarsTemplateCompiler } from "../../handlebars/handlebars-template-compiler.service";
import { AwsSesService } from "./aws-ses.service";

export const makeAwsSesService = (): IEmailSender => {
  return new AwsSesService(new HandlebarsTemplateCompiler());
};
