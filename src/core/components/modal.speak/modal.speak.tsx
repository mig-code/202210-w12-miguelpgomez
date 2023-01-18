import React, { useContext } from 'react';
import { CharacterContext } from '../../context/character.context';

export default function ModalSpeak() {
    const { isModalOpen, modalCharacter } = useContext(CharacterContext);

    return (
        <div
            className={
                isModalOpen
                    ? 'comunications  comunications--on'
                    : 'comunications'
            }
        >
            <p className="comunications__text display-1">
                {modalCharacter.message}
            </p>
            <img
                className="comunications__picture"
                src={modalCharacter.img}
                alt={modalCharacter.char_name}
            />
        </div>
    );
}
