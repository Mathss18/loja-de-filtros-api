import { IController } from "../../../../protocols/controller.interface";
import { makeBrevoMailService } from "../../../../services/brevo/mail/brevo-mail.factory";
import { OrderCreatedController } from "./order-created.controller";

export const makeOrderCreatedConroller = (): IController => {
  return new OrderCreatedController(makeBrevoMailService());
};
