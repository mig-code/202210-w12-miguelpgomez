import React, { useCallback, useEffect, useReducer } from 'react';
import { CharacterOption } from '../data/characters.data';
import {
    CharacterAction,
    characterSelectedCreator,
    characterShowModalCreator,
} from '../reducers/action.creators';
import { characterReducer } from '../reducers/character.reducer';

export type UseModal = {
    isModalOpen: boolean;
    handleModal: (item: CharacterOption) => void;
    modalCharacter: CharacterOption;
};

export function useModal(): UseModal {
    const intialModal = false;
    const initialcharacter = {} as CharacterOption;
    const [isModalOpen, dispatchModal] = useReducer(
        characterReducer,
        intialModal
    ) as [boolean, React.Dispatch<CharacterAction>];
    const [modalCharacter, dispatchCharacter] = useReducer(
        characterReducer,
        initialcharacter
    ) as [CharacterOption, React.Dispatch<CharacterAction>];

    const handleModal = useCallback(
        (item: CharacterOption) => {
            dispatchCharacter(characterSelectedCreator(item));
            dispatchModal(characterShowModalCreator(isModalOpen));
        },
        [isModalOpen]
    );

    useEffect(() => {
        setTimeout(() => {
            if (isModalOpen) {
                dispatchModal(characterShowModalCreator(isModalOpen));
            }
        }, 2000);
    }, [isModalOpen]);

    return {
        isModalOpen,
        handleModal,
        modalCharacter,
    };
}
