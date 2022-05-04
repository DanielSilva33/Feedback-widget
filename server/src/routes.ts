import { Router } from "express";
import { NodemailerMailProvider } from "./provider/nodemailer/NodemailerMailProvider";
import { PrismaFeedbackRepository } from "./repositories/prisma/PrismaFeedbackRepository";
import { SubmitFeedbacksUseCases } from "./useCases/SubmitFeedbacksUseCases";

const routes = Router();

routes.post("/feedbacks", async (request, response) => {
  const { type, comment, screenshot } = request.body;

  const prismaFeedbackRepository = new PrismaFeedbackRepository();
  const nodemailerMailProvider = new NodemailerMailProvider();
  const submitFeedbacksUseCases = new SubmitFeedbacksUseCases(
    prismaFeedbackRepository,
    nodemailerMailProvider
  );

  await submitFeedbacksUseCases.execute({
    type,
    comment,
    screenshot,
  });

  return response.status(201).send();
});

export { routes };
