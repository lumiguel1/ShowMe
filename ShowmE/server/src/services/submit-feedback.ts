import { MailAdapter } from "../adapters/mail-adapters";
import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedBackServiceRequest {
    type: string;
    comment: string;
    screenshot?: string;
}

export class SubmitFeedBackService {
    constructor(
        private feedbacksRepository: FeedbacksRepository,
        private mailAdapter: MailAdapter,
    ) {}

    async handle(request: SubmitFeedBackServiceRequest) {
        const { type, comment, screenshot } = request;

        if(!type) {
            throw new Error("Type is required.")
        }

        if(!comment) {
            throw new Error("Type is required.")
        }

        if(screenshot && !screenshot.startsWith('data:image/png;base64')){
            throw new Error("Invalid screenshot format.")
        }

        await this.feedbacksRepository.create({
            type,
            comment,
            screenshot,
        })

        await this.mailAdapter.sendMail({
            subject: 'novo Feed',
            body: [
                `<div style="font-family: sens-serif; font-size: 16px; color: #111">`,
                    `<p>Tipo do Feedback: ${type}</p>`,
                    `<p>Comentário: ${comment}</p>`,
                `</div>`,
            ].join('\n'),
        })
    }
}