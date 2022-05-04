import { MailAdapter, sendMailData } from "../mail-adapters";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "b52eb94a4db627",
        pass: "88f654cb237113"
    }
});

export class NodeMailerMailAdapters implements MailAdapter {
    async sendMail({ subject, body}: sendMailData) {
        await transport.sendMail({
            from: 'Team support <opa@feeds.com>',
            to: 'Miguel <migu@gmail.com>',
            subject,
            html: body,
        });

    }
};
