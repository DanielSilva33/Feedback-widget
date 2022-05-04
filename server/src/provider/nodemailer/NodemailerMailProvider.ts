import { IMailProvider, IMailProviderData } from "../IMailProvider";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "eb03dd2dda8174",
    pass: "333d4279902d49",
  },
});

class NodemailerMailProvider implements IMailProvider {
  async sendMail(data: IMailProviderData) {
    const { body, subject } = data;

    await transport.sendMail({
      from: "Equipe Influeasy <agencia@influeasy.app.br>",
      to: "Daniel Silva <daniel.oliveiradasilvam@gmail.com>",
      subject,
      html: body,
    });
  }
}

export { NodemailerMailProvider };
