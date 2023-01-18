import React from 'react';
import { CharacterOption } from '../../data/characters.data';

export default function ModalSpeak({
    char,
    openModal,
}: {
    char: CharacterOption;
    openModal: boolean;
}) {
    return (
        <div
            className={
                openModal ? 'comunications  comunications--on' : 'comunications'
            }
        >
            <p className="comunications__text display-1">{char.comunicate()}</p>
            <img
                className="comunications__picture"
                src={char.img}
                alt={char.char_name}
            />
        </div>
    );
}
