import path from "path";
import {
  noContent,
  serverError,
  success,
} from "../../../../helpers/http.helper";
import { IController } from "../../../../protocols/controller.interface";
import {
  EmailSenderParamsType,
  IEmailSender,
} from "../../../../protocols/email-sender.interface";
import {
  HttpRequest,
  HttpResponse,
} from "../../../../protocols/http.interface";
import { OrderModel } from "../../models/order";

export class OrderCreatedController implements IController {
  constructor(private readonly emailSender: IEmailSender) {}

  async handle(httpRequest: HttpRequest<OrderModel>): Promise<HttpResponse> {
    try {
      console.log(`[OrderCreatedController] - status: ${httpRequest.body.status}`);
      if (httpRequest.body.status === "processing") {
        this.sendProcessingEmail(httpRequest);
        return success({});
      }

      return noContent();
    } catch (err: unknown) {
      return serverError(err as Error);
    }
  }

  private async sendProcessingEmail(
    httpRequest: HttpRequest<OrderModel>
  ): Promise<void> {
    const { body } = httpRequest;

    const params: EmailSenderParamsType = {
      to: body.billing.email,
      subject: "Pedido atualizado",
      text: "Seu pedido foi atualizado",
      html: {
        template: path.join(
          process.cwd(),
          "/src/mail/templates/order-processed.hbs"
        ),
        data: {
          orderNumber: body.id,
          customerName: `${body.billing.first_name} ${body.billing.last_name}`,
        },
      },
    };

    await this.emailSender.sendEmail(params);
  }
}
