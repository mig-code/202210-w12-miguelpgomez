import { createContext } from 'react';
import { CharacterOption, CharactersOptions } from '../data/characters.data';

export type CharacterContextStructure = {
    characters: CharactersOptions;
    handleUpdate: (characterPayload: Partial<CharactersOptions[0]>) => void;
   

};

export const initialContext: CharacterContextStructure = {
    characters: [],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    handleUpdate: (characterPayload: Partial<CharacterOption>) => {},
};

export const CharacterContext = createContext(initialContext);
