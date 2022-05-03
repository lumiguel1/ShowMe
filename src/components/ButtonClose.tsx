import { Popover } from '@headlessui/react';
import { X } from 'phosphor-react';

export function ButtonClose() {
    return (
        <Popover.Button className="top-5 right-5 absolute text-zinc-400 hover:text-xinc-100" title="Fechar">
            <X weight="bold" className="w-4 h-4 "/>
        </Popover.Button>
    )
}