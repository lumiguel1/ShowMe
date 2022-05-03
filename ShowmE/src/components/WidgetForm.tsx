import { ButtonClose } from "./ButtonClose";

const feedTypes = {
    BUG: {
        title: "Problema"
    },
    IDEA: {
        title: "Ideia"
    },
    OTHER: {
        title: "Outro"
    }
}

export function WidgetForm() {
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>

                <ButtonClose />
            </header>

            <div className="flex py-8 gap-2 w-full">

            </div>
            
            <footer className="text-xs text-neutral-400">
                <a className="underline underline-offset-1" href="#">Vite app</a>
            </footer>
        </div>
    )
}