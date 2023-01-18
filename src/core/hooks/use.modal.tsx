import { useCallback, useEffect, useReducer, useState } from 'react';
import {
    CharacterOption,
    CharactersOptions,
    getCharactersData,
} from '../data/characters.data';
import { characterUpdateCreator } from '../reducers/action.creators';
import { characterReducer } from '../reducers/character.reducer';

export type UseModal = {
    isModalOpen: boolean;
    handleModal: () => void;
};

export function useModal(): UseModal {
    const [isModalOpen, setIsModalOpen] = useState(false);

    console.log('LOAD HOOK MODAL');

    const handleModal = useCallback(() => {
        setIsModalOpen(!isModalOpen);
    }, [isModalOpen]);

    useEffect(() => {
        console.log(isModalOpen)
        setTimeout(() => {
            if (isModalOpen) {
                setIsModalOpen(!isModalOpen);
                console.log('CLOSING MODAL');
            }
        }, 2000);
    }, [isModalOpen]);

    return {
        isModalOpen,
        handleModal,
    };
}
