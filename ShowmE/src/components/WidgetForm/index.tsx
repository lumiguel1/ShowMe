import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { useState } from 'react';
import { FeedBackTypeStep } from "./Steps/FeedBackTypeStep";
import { FeedBackContentStep } from "./Steps/FeedBackContentStep";
import { FeedBackSuccessStep } from './Steps/FeedBackSuccessStep';

export const feedTypes = {
    BUG: {
        title: "Problema",
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto',
        },
    },
    IDEA: {
        title: "Ideia",
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lampada',
        },
    },
    OTHER: {
        title: "Outro",
        image: {
            source: thoughtImageUrl,
            alt: 'Nuvem de pensamento',
        },
    },
}

export type FeedBackType = keyof typeof feedTypes

export function WidgetForm() {
    const [feedBackType, setFeedBackType] = useState<FeedBackType | null>(null);
    const [feedBackSend, setFeedBackSend] = useState(false);


    function handleRestartFeedBack() {
        setFeedBackType(null);
        setFeedBackSend(false);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            { feedBackSend ? (
                <FeedBackSuccessStep onFeedBackRestartRequest={handleRestartFeedBack}/>
            ) : 
                <>
                    {!feedBackType ? (
                    <FeedBackTypeStep onFeedType={setFeedBackType}/>
                ) : 
                    <FeedBackContentStep 
                        onFeedContent={feedBackType}
                        onFeedBackRestarRequested={handleRestartFeedBack}
                        onFeedBackSend={() => setFeedBackSend(true)}
                    />
                }
                </>
            }
            
            <footer className="text-xs text-neutral-400">
                <a className="underline underline-offset-1" href="#">Vite appA</a>
            </footer>
        </div>
    );
}