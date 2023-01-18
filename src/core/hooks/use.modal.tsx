import { useCallback, useEffect, useReducer, useState } from 'react';
import {
    CharacterOption,
    CharactersOptions,
    getCharactersData,
} from '../data/characters.data';
import {
    characterSelectedCreator,
    characterShowModalCreator,
} from '../reducers/action.creators';
import {
    characterReducer,
    characterSelectedReducer,
    characterShowModalReducer,
} from '../reducers/character.reducer';

export type UseModal = {
    isModalOpen: boolean;
    handleModal: (item: CharacterOption) => void;
    modalCharacter: CharacterOption;
};

export function useModal(): UseModal {
    const intialModal = false;
    const initialcharacter = {} as CharacterOption;
    const [isModalOpen, dispatchModal] = useReducer(
        characterShowModalReducer,
        intialModal
    );
    const [modalCharacter, dispatchCharacter] = useReducer(
        characterSelectedReducer,
        initialcharacter
    );

    // const [isModalOpen, setIsModalOpen] = useState(intialModal);
    // const [modalCharacter, setModalCharacter] = useState(initialcharacter);

    console.log('LOAD HOOK MODAL');

    const handleModal = useCallback(
        (item: CharacterOption) => {
            dispatchCharacter(characterSelectedCreator(item));
            dispatchModal(characterShowModalCreator(isModalOpen));
        },
        [isModalOpen]
    );

    useEffect(() => {
        console.log(isModalOpen);
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
