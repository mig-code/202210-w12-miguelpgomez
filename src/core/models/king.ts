import { Character } from './character.js';
export class King extends Character {
    constructor(
        char_name: string,
        char_fam: string,
        char_age: number,

        img: string,

        public regnalYears: number
    ) {
        super(char_name, char_fam, char_age, img);
        this.message = 'Vais a morir todos';
        this.emoji = '👑';
    }
}
