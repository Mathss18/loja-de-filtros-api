import { IController } from "../../../../protocols/controller.interface";
import { makeBrevoMailService } from "../../../../services/brevo/mail/brevo-mail.factory";
import { OrderUpdatedController } from "./order-updated.controller";

export const makeOrderUpdatedController = (): IController => {
  return new OrderUpdatedController(makeBrevoMailService());
};
