import { Character } from './character.js';
export class Fighter extends Character {
    constructor(
        char_name: string,
        char_fam: string,
        char_age: number,
        // isAlive: boolean,
        img: string,
        public weapon: string,
        public skill: number
    ) {
        super(char_name, char_fam, char_age, img);
        this.message = 'Primero pego y luego pregunto';
        this.emoji = '🗡';
    }
}
