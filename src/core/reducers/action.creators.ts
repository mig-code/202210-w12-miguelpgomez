import { CharacterOption } from '../data/characters.data';

import { characterActionTypes } from './action.types';

export type CharacterAction = {
    type: string;
    payload: CharacterOption['id'];
};

export const characterUpdateCreator = (
    payload: CharacterOption['id']
): CharacterAction => ({
    type: characterActionTypes.update,
    payload,
});
