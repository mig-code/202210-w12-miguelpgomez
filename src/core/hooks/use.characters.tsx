import { useReducer } from 'react';
import {
    CharacterOption,
    CharactersOptions,
    getCharactersData,
} from '../data/characters.data';
import {
    CharacterAction,
    characterUpdateCreator,
} from '../reducers/action.creators';
import { characterReducer } from '../reducers/character.reducer';

export type UseCharacters = {
    getCharacters: () => CharactersOptions;
    handleUpdate: (characterPayload: CharacterOption['id']) => void;
};

export function useCharacters(): UseCharacters {
    const initialCharacters: CharactersOptions = getCharactersData();
    const [characters, dispatch] = useReducer(
        characterReducer,
        initialCharacters
    ) as [CharactersOptions, React.Dispatch<CharacterAction>];

    const getCharacters = () => characters;
    const handleUpdate = (characterPayload: CharacterOption['id']) => {
        dispatch(characterUpdateCreator(characterPayload));
    };

    return {
        getCharacters,
        handleUpdate,
    };
}
