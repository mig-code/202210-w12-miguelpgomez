import { createContext } from 'react';
import { CharacterOption, CharactersOptions } from '../data/characters.data';

export type CharacterContextStructure = {
    characters: CharactersOptions;
    handleUpdate: (characterPayload: CharacterOption['id']) => void;
    isModalOpen: boolean;
    handleModal: () => void;
};

export const initialContext: CharacterContextStructure = {
    characters: [],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    handleUpdate: (characterPayload: CharacterOption['id']) => {},
    isModalOpen: false,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    handleModal: () => {},
};

export const CharacterContext = createContext(initialContext);
