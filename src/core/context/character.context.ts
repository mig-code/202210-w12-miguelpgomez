/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';
import { CharacterOption, CharactersOptions } from '../data/characters.data';

export type CharacterContextStructure = {
    characters: CharactersOptions;
    handleUpdate: (characterPayload: CharacterOption['id']) => void;
    isModalOpen: boolean;
    handleModal: (char: CharacterOption) => void;
    modalCharacter: CharacterOption;
};

export const initialContext: CharacterContextStructure = {
    characters: [],
    handleUpdate: (characterPayload: CharacterOption['id']) => {},
    isModalOpen: false,
    handleModal: (char: CharacterOption) => {},
    modalCharacter: {} as CharacterOption,
};

export const CharacterContext = createContext(initialContext);
