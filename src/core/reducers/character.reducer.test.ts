import { CharacterOption, CharactersOptions } from '../data/characters.data';
import { mockAdvisor } from '../mocks/models.mocks';

import {
    CharacterAction,
    characterSelectedCreator,
    characterShowModalCreator,
    characterUpdateCreator,
} from './action.creators';
import { characterReducer } from './character.reducer';

describe('Given the reducer', () => {
    let state: CharactersOptions | boolean | CharacterOption;
    let action: CharacterAction;

    describe('When the action type is "places@update"', () => {
        test('Then it should return the state with the data updated', () => {
            const updateCharacter: CharacterOption['id'] = mockAdvisor.id;
            state = [mockAdvisor];
            action = characterUpdateCreator(updateCharacter);
            const result = characterReducer(state, action) as CharactersOptions;
            expect(result[0].isAlive).toBe(false);
        });
        test('If de ID doesnt exists it should return the same state', () => {
            const updateCharacter: CharacterOption['id'] = '123';
            state = [mockAdvisor];
            action = characterUpdateCreator(updateCharacter);
            const result = characterReducer(state, action);
            expect(result).toEqual([mockAdvisor]);
        });
    });
    describe('When the action type is "character@showModal"', () => {
        test('Then it should return the state whith character updated', () => {
            const selectedChar = mockAdvisor;
            state = [];
            action = characterSelectedCreator(selectedChar);
            const result = characterReducer(state, action) as CharacterOption;
            expect(result).toEqual(selectedChar);
        });
    });
    describe('When the action type is "characterSelectedCreator"', () => {
        test('Then it should return !state', () => {
            state = false;
            action = characterShowModalCreator(!state);
            const result = characterReducer(state, action) as boolean;
            expect(result).toBe(true);
        });
    });
    describe('When the action type is not valid', () => {
        test('Then it should return the state', () => {
            state = [];
            action = { type: 'Bad', payload: 'Test' };
            const result = characterReducer(state, action);
            expect(result).toEqual(state);
        });
    });
});
