import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedBackServiceRequest {
    type: string;
    comment: string;
    screenshot?: string;
}

export class SubmitFeedBackService {
    constructor(
        private feedbacksRepository: FeedbacksRepository,
    ) {}

    async handle(request: SubmitFeedBackServiceRequest) {
        const { type, comment, screenshot } = request;

        await this.feedbacksRepository.create({
            type,
            comment,
            screenshot,
        })
    }
}