import { useCallback, useMemo, useState } from 'react';
import {
    CharactersOptions,
    getCharactersData,
} from '../../data/characters.data';

export type UseCharacters = {
    getCharacters: () => CharactersOptions;
};

export function useCharacters(): UseCharacters {
    const initialState: CharactersOptions = getCharactersData();

    const [characters, setCharacters] = useState(initialState);

    const getCharacters = () => characters;

    return {
        getCharacters,
    };
}
