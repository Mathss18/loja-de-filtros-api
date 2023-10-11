import express from "express";
import { ControllerAdapter } from "../adapters/controller.adapter";
import { makeOrderUpdatedController } from "../loja-de-filtros/order/controllers/order-updated/order-updated.factory";
import { makeOrderCreatedConroller } from "../loja-de-filtros/order/controllers/order-created/order-created.factory";

const orderRoutes = express.Router();

orderRoutes.post(
  "/order-created",
  ControllerAdapter.adapt(makeOrderCreatedConroller())
);
orderRoutes.post(
  "/order-updated",
  ControllerAdapter.adapt(makeOrderUpdatedController())
);

export { orderRoutes };
