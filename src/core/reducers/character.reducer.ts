import { CharacterOption, CharactersOptions } from '../data/characters.data';
import { CharacterAction } from './action.creators';
import { characterActionTypes } from './action.types';


export function characterReducer(
    state: CharactersOptions,
    action: CharacterAction
): CharactersOptions {
    switch (action.type) {
        case characterActionTypes.update:
            const updateCharacter = action.payload as CharacterOption["id"];
            // return state.map((item) =>
            //     item.id === updatePlace.id ? updatePlace : item
            // );
            const newCharacters = state.map((item) => {
                if (item.id === updateCharacter) {
                    return {
                        ...item,
                        isAlive: false,
                    };
                }
                return item;
            });
            return newCharacters;

        default:
            return [...state];
    }
}
