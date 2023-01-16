import { createContext } from 'react';
import { CharactersOptions } from '../data/characters.data';

export type CharacterContextStructure = {
    characters: CharactersOptions;
};

export const initialContext: CharacterContextStructure = {
    characters: [],
};

export const CharacterContext = createContext(initialContext);
