import { SendEmailRequest } from "aws-sdk/clients/ses";
import {
  EmailSenderParamsType,
  IEmailSender,
} from "../../../protocols/email-sender.interface";
import { SES } from "aws-sdk";
import { TemplateCompiler } from "../../../protocols/template-compiler";

export class AwsSesService implements IEmailSender {
  constructor(private readonly templateCompiler: TemplateCompiler) {}
  async sendEmail(params: EmailSenderParamsType) {
    const ses = new SES({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION,
    });

    const { to, subject, text, html } = params;

    const paramsSes: SendEmailRequest = {
      Source: process.env.AWS_SES_EMAIL_FROM!,
      Destination: {
        ToAddresses: [to],
      },
      ReplyToAddresses: [],
      Message: {
        Body: {
          Text: {
            Charset: "UTF-8",
            Data: text,
          },
        },
        Subject: {
          Charset: "UTF-8",
          Data: subject,
        },
      },
    };

    if (html) {
      const { template, data } = html;
      const compiledTemplate = this.templateCompiler.compile(template, data);
      paramsSes.Message.Body.Html = {
        Charset: "UTF-8",
        Data: compiledTemplate,
      };
    }

    await ses.sendEmail(paramsSes).promise();
  }
}
