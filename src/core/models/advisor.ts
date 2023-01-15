import { Character } from "./character";
import { Fighter } from "./fighter";
import { King } from "./king";
import { Squire } from "./squire";

export class Advisor extends Character {
    constructor(
        char_name: string,
        char_fam: string,
        char_age: number,
        img: string,
        public advises: Fighter | King | Advisor | Squire
    ) {
        super(char_name, char_fam, char_age, img);
        this.message = 'No sé por qué, pero creo que voy a morir pronto';
        this.emoji = '🎓';
    }
}
