import { Request, Response } from "express";
import { IController } from "../protocols/controller.interface";
import { HttpRequest } from "../protocols/http.interface";

export class ControllerAdapter {
  static adapt(controller: IController): any {
    return async (req: Request, res: Response) => {
      const httpRequest: HttpRequest = {
        body: req.body,
        params: req.params,
        query: req.query,
      };
      const httpResponse = await controller.handle(httpRequest);
      if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
        res.status(httpResponse.statusCode).json(httpResponse.body);
      } else {
        res
          .status(httpResponse.statusCode)
          .json({ error: httpResponse.body.message });
      }
    };
  }
}
