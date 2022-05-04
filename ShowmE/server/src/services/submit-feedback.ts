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