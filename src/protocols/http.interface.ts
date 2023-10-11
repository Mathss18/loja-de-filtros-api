export type HttpResponse = {
  statusCode: number;
  body: any;
};

export type HttpRequest<Body> = {
  body: Body;
  headers?: any;
  query?: any;
  params?: any;
  rawBody?: any;
};
