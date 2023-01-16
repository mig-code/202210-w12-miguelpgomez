import { useState } from 'react';
import {
    CharacterOption,
    CharactersOptions,
    getCharactersData,
} from '../../data/characters.data';

export type UseCharacters = {
    getCharacters: () => CharactersOptions;
    handleUpdate: (characterPayload: Partial<CharacterOption>) => void;
};

export function useCharacters(): UseCharacters {
    const initialState: CharactersOptions = getCharactersData();
    const [characters, setCharacters] = useState(initialState);

    const getCharacters = () => characters;
console.log("LOAD HOOK")
    const handleUpdate = (characterPayload: Partial<CharacterOption>) => {
        setCharacters((prev) => {
            const newCharacters = prev.map((item) => {
                if (item.id === characterPayload.id) {
                    return {
                        ...item,
                        isAlive: false,
                    };
                }
                return item;
            });
            return newCharacters;
        });
    };

    return {
        getCharacters,
        handleUpdate,
    };
}
