import path from "path";
import { EmailSenderParamsType } from "./protocols/email-sender.interface";
import { makeAwsSesService } from "./services/aws/email/aws-ses.factory";
import { makeBrevoMailService } from "./services/brevo/mail/brevo-mail.factory";

export async function execute() {
  const emailSender = makeBrevoMailService();
  const params: EmailSenderParamsType = {
    to: "esdc1984@gmail.com",
    subject: "Pedido atualizado",
    text: "Seu pedido foi atualizado",
    html: {
      template: path.join(process.cwd(), '/src/mail/templates/order-processed.hbs'),
      data: {
        orderNumber: "123",
        customerName: `Matheus Filho`,
      },
    },
  };

  await emailSender.sendEmail(params);
}
