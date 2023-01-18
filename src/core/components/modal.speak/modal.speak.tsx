import React, { useContext, useEffect } from 'react';
import { CharacterContext } from '../../context/character.context';
import { CharacterOption } from '../../data/characters.data';

export default function ModalSpeak({ char }: { char: CharacterOption }) {
    const { isModalOpen } = useContext(CharacterContext);

    return (
        <div
            className={
                isModalOpen
                    ? 'comunications  comunications--on'
                    : 'comunications'
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
