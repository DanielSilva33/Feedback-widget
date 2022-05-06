import { IMailProvider } from "../provider/IMailProvider";
import { FeedbacksRepository } from "../repositories/FeedbacksRepository";

interface submitFeedbacksUseCasesRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

class SubmitFeedbacksUseCases {
  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private iMailProvider: IMailProvider
  ) {}

  async execute(request: submitFeedbacksUseCasesRequest) {
    const { comment, type, screenshot } = request;

    if (!type) {
      throw new Error("Type and Comment is required!");
    }

    if (!comment) {
      throw new Error("Comment is required!");
    }

    if (screenshot && !screenshot.startsWith("data:image/png;base64")) {
      throw new Error("Invalid screenshot format");
    }

    await this.feedbacksRepository.create({
      comment,
      type,
      screenshot,
    });

    await this.iMailProvider.sendMail({
      subject: "Novo feedback!",
      body: [
        `<div style="font-family sans-serif; font-size: 16px; color: #111">`,
        `<p>Tipo do feedback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        screenshot ? `<img src=${screenshot} />` : ``,
        `</div>`,
      ].join("\n"),
    });

    return;
  }
}

export { SubmitFeedbacksUseCases };
