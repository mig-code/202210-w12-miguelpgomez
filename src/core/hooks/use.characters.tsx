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
    handleUpdate: (characterPayload: CharacterOption["id"]) => void;
};

export function useCharacters(): UseCharacters {
    const initialState: CharactersOptions = getCharactersData();
    const [characters, dispatch] = useReducer(characterReducer, initialState);

    // const [characters, setCharacters] = useState(initialState);

    const getCharacters = () => characters;
    console.log('LOAD HOOK');
    const handleUpdate = (characterPayload: CharacterOption["id"]) => {
        // setCharacters((prev) => {
        //     const newCharacters = prev.map((item) => {
        //         if (item.id === characterPayload.id) {
        //             return {
        //                 ...item,
        //                 isAlive: false,
        //             };
        //         }
        //         return item;
        //     });
        //     return newCharacters;
        // });
        dispatch(characterUpdateCreator(characterPayload)
        );
    };

    return {
        getCharacters,
        handleUpdate,
    };
}
