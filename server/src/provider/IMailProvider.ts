export interface IMailProviderData {
  subject: string;
  body: string;
}

export interface IMailProvider {
  sendMail: (data: IMailProviderData) => Promise<void>;
}
