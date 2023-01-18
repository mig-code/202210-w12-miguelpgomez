import { CharacterOption, CharactersOptions } from '../data/characters.data';
import { CharacterAction } from './action.creators';
import { characterActionTypes } from './action.types';

export function characterReducer(
    state: CharactersOptions | boolean | CharacterOption,
    action: CharacterAction
): CharactersOptions | boolean | CharacterOption {
    switch (action.type) {
        case characterActionTypes.update:
            const updateCharacter = action.payload;
            const prevCharacters = state as CharactersOptions;
            const newCharacters = prevCharacters.map((item) => {
                if (item.id === updateCharacter) {
                    return {
                        ...item,
                        isAlive: false,
                    };
                }
                return item;
            });
            return newCharacters;
        case characterActionTypes.showModal:
            return !state as boolean;
        case characterActionTypes.selected:
            return action.payload as CharacterOption;

        default:
            return state;
    }
}
