import { SubmitFeedbacksUseCases } from "./SubmitFeedbacksUseCases";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedbacksUseCases = new SubmitFeedbacksUseCases(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
);

describe("Submit feedback", () => {
  it("Should be able to submit a feedback", async () => {
    await expect(
      submitFeedbacksUseCases.execute({
        type: "BUG",
        comment: "BUG",
        screenshot: "data:image/png;base64",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it("Should not be able to submit feedback without type", async () => {
    await expect(
      submitFeedbacksUseCases.execute({
        type: "",
        comment: "BUG",
        screenshot: "data:image/png;base64",
      })
    ).rejects.toThrow();
  });

  it("Should not be able to submit feedback without comment", async () => {
    await expect(
      submitFeedbacksUseCases.execute({
        type: "BUG",
        comment: "",
        screenshot: "data:image/png;base64",
      })
    ).rejects.toThrow();
  });

  it("Should not be able to submit feedback with an invalid screenshot", async () => {
    await expect(
      submitFeedbacksUseCases.execute({
        type: "BUG",
        comment: "BUG",
        screenshot: "error",
      })
    ).rejects.toThrow();
  });
});
