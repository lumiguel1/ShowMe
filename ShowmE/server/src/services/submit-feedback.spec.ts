import { SubmitFeedBackService } from "./submit-feedback"

const submitFeedBack = new SubmitFeedBackService(
    { create: async () => {}},
    { sendMail: async () => {}}
)

describe('Submit feedback', () => {
    it('should be able to submit a feedback', async () => {
        await expect(submitFeedBack.handle({
            type: 'BUG',
            comment: 'teste',
            screenshot: 'data:image/png;base64'
        })).resolves.not.toThrow();
    });

    it('should not be able to submit without type', async () => {
        await expect(submitFeedBack.handle({
            type: '',
            comment: 'teste',
            screenshot: 'data:image/png;base64'
        })).rejects.toThrow();
    });

    it('should not be able to submit without comment', async () => {
        await expect(submitFeedBack.handle({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64'
        })).rejects.toThrow();
    });

    it('should not be able to submit a screenshot invalid', async () => {
        await expect(submitFeedBack.handle({
            type: 'BUG',
            comment: 'Teste',
            screenshot: 'deolhonance.jpg'
        })).rejects.toThrow();
    });
});