import { Fighter } from './fighter';
import { Character } from './character';
export class Squire extends Character {
    constructor(
        char_name: string,
        char_fam: string,
        char_age: number,
        img: string,
        public serve: Fighter,
        public fidelity: number
    ) {
        super(char_name, char_fam, char_age, img);
        this.message = 'Soy un loser';
        this.emoji = '🛡';
    }
}
