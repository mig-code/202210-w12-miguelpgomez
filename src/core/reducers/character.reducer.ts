import { CharacterOption, CharactersOptions } from '../data/characters.data';
import { CharacterAction } from './action.creators';
import { characterActionTypes } from './action.types';

export function characterReducer(
    state: CharactersOptions,
    action: CharacterAction
): CharactersOptions {
    switch (action.type) {
        case characterActionTypes.update:
            const updateCharacter = action.payload;
            const newCharacters = state.map((item) => {
                if (item.id === updateCharacter) {
                    return {
                        ...item,
                        isAlive: false,
                    };
                }
                return item;
            });
            return newCharacters as CharactersOptions;

        default:
            return [...state];
    }
}
export function characterShowModalReducer(
    state: boolean,
    action: CharacterAction
): boolean {
    switch (action.type) {
        case characterActionTypes.showModal:
            console.log('reducerModal');
            console.log('EL ESTADO ES: ', !state);
            return !state;
        default:
            return state;
    }
}
export function characterSelectedReducer(
    state: CharacterOption,
    action: CharacterAction
): CharacterOption {
    switch (action.type) {
        case characterActionTypes.selected:
            return action.payload as CharacterOption;
        default:
            return state;
    }
}
