import express from 'express';
import { NodeMailerMailAdapters } from './adapters/nodemailer/nodemailer-mail-adapters';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedBackService } from './services/submit-feedback';

export const routes = express.Router();

routes.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot } = req.body

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
    const nodeMailerMailAdapters = new NodeMailerMailAdapters();

    const submitFeedBackService = new SubmitFeedBackService(prismaFeedbacksRepository, nodeMailerMailAdapters);

    await submitFeedBackService.handle({
        type,
        comment,
        screenshot,
    })

    return res.status(201).send();
});