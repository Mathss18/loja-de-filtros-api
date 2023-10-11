import { HttpRequest, HttpResponse } from "./http.interface";

export interface IController {
  handle(httpRequest: HttpRequest): Promise<HttpResponse>;
}
