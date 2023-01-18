import { CharacterOption } from '../data/characters.data';

import { characterActionTypes } from './action.types';

export type CharacterAction = {
    type: string;
    payload: CharacterOption['id'] |CharacterOption |boolean;
};

export const characterUpdateCreator = (
    payload: CharacterOption['id']
): CharacterAction => ({
    type: characterActionTypes.update,
    payload,
});

export const characterShowModalCreator = (
    payload: boolean
): CharacterAction => ({
    type: characterActionTypes.showModal,
    payload,
});

export const characterSelectedCreator = (
    payload: CharacterOption
): CharacterAction => ({
    type: characterActionTypes.selected,
    payload,
});
