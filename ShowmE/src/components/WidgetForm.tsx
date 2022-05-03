import { ButtonClose } from "./ButtonClose";
import bugImageUrl from '../assets/bug.svg';
import ideaImageUrl from '../assets/idea.svg';
import thoughtImageUrl from '../assets/thought.svg';
import { useDebugValue } from "react";

const feedTypes = {
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

export function WidgetForm() {
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>

                <ButtonClose />
            </header>

            <div className="flex py-8 gap-2 w-full">
                { Object.entries(feedTypes).map(([key, value]) => {
                    return (
                        <button>
                            <img src={value.image.source} alt={value.image.alt} />
                            <span>{value.title}</span>
                        </button>
                    );
                })}
            </div>
            
            <footer className="text-xs text-neutral-400">
                <a className="underline underline-offset-1" href="#">Vite appA</a>
            </footer>
        </div>
    )
}