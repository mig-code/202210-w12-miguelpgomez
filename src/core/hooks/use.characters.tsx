import { useReducer } from 'react';
import {
    CharacterOption,
    CharactersOptions,
    getCharactersData,
} from '../data/characters.data';
import { characterUpdateCreator } from '../reducers/action.creators';
import { characterReducer } from '../reducers/character.reducer';

export type UseCharacters = {
    getCharacters: () => CharactersOptions;
    handleUpdate: (characterPayload: CharacterOption['id']) => void;
};

export function useCharacters(): UseCharacters {
    const initialState: CharactersOptions = getCharactersData();
    const [characters, dispatch] = useReducer(characterReducer, initialState);

    const getCharacters = () => characters;
    console.log('LOAD HOOK CHARACTERS');
    const handleUpdate = (characterPayload: CharacterOption['id']) => {
        dispatch(characterUpdateCreator(characterPayload));
    };

    return {
        getCharacters,
        handleUpdate,
    };
}
