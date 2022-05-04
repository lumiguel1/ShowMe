import express from 'express';
import nodemailer from 'nodemailer';
import { prisma } from './prisma';

export const routes = express.Router();

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "b52eb94a4db627",
        pass: "88f654cb237113"
    }
});


routes.post('/feedbacks', async (req, res) => {
    const corpo = req.body

    const feedback = await prisma.feedback.create({
        data: {
            type: corpo.type,
            comment: corpo.comment,
            screenshot: corpo.screenshot
        }
    });

    await transport.sendMail({
        from: 'Team support <opa@feeds.com>',
        to: 'Miguel <migu@gmail.com>',
        subject: 'New Feedback',
        html: [
            `<div style="font-family: sens-serif; font-size: 16px; color: #111">`,
                `<p>Tipo do Feedback: ${corpo.type}</p>`,
                `<p>Comentário: ${corpo.comment}</p>`,
            `</div>`,
        ].join('\n'),
    });

    return res.status(201).json({ data: feedback });
});