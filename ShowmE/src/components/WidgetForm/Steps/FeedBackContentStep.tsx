import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedBackType, feedTypes } from "..";
import { api } from "../../../Services/api";
import { ButtonClose } from "../../ButtonClose";
import { Loading } from "../Loading";
import { ScreenShotButton } from "../ScreenShotButton";


interface feedBackContentProps {
    onFeedContent: FeedBackType;
    onFeedBackRestarRequested: () => void;
    onFeedBackSend: () => void;
}

export function FeedBackContentStep(props: feedBackContentProps) {
    const [screenshot, setScreenshot] = useState<string | null>(null);
    const [comment, setComment] = useState('');
    const [isSendingLoading, setIsSendingLoading] = useState(false)
    const feedInfoTypes = feedTypes[props.onFeedContent];


    async function handleSubmitFeedback(event: FormEvent) {
        event.preventDefault();
        setIsSendingLoading(true)
        await api.post('/feedbacks', {
            type: props.onFeedContent,
            comment,
            screenshot
        });

        setIsSendingLoading(false)
        props.onFeedBackSend();
    }

    return(
        <>
            <header>
                <button 
                    type="button"   
                    className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
                    onClick={props.onFeedBackRestarRequested}
                >
                    <ArrowLeft weight="bold" className="w-4 h-4" />
                </button>

                <span className="text-xl leading-6 flex items-center gap-2">
                    <img src={feedInfoTypes.image.source} alt={feedInfoTypes.image.alt} className="w-6 h-6"/>
                    {feedInfoTypes.title}
                </span>

                <ButtonClose />
            </header>

            <form className="my-4 w-full" onSubmit={handleSubmitFeedback}>
                <textarea 
                    onChange={event => setComment(event.target.value)}
                    className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin" 
                    placeholder="O que est?? acontecendo?"/>

                <footer className="flex gap-2 mt-2">
                    
                    <ScreenShotButton 
                        onScreenshot={screenshot}
                        onScreenShotReady={setScreenshot}
                    />

                    <button type="submit"
                        disabled={comment.length == 0 || isSendingLoading}
                        className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
                    >
                        { isSendingLoading ? <Loading /> : 'Enviar Feedback!'}
                    </button>
                </footer>
            </form>
        </>
    );
}