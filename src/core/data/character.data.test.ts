import { getCharactersData } from './characters.data';

describe('Given getCharactersData', () => {
    test('Then it should return an array of characters', () => {
        const characters = getCharactersData();
        expect(characters.length).toBe(5);
    });
});
