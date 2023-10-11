export interface IEmailSender {
  sendEmail: (params: EmailSenderParamsType) => Promise<void>;
}

export type EmailSenderParamsType = {
  to: string;
  subject: string;
  text: string;
  html?: EmailHtmlCompilerParamsType;
};

export type EmailHtmlCompilerParamsType = {
  template: string;
  data: any;
};
