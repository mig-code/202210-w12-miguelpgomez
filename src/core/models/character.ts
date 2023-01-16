export type CharacterType = {
    char_name: string;
    char_fam: string;
    char_age: number;
    img: string;
    isAlive: boolean;
    message: string;
    tvShow: string;
    emoji: string;
    id: string;
    comunicate: () => string;
    death: () => void;
};
export class Character {
    static generateId() {
        const aNumbers = new Uint32Array(1);
        window.crypto?.getRandomValues(aNumbers);
        return ('000000' + aNumbers[0]).slice(-6);
    }
    id: string;
    tvShow = 'Game of Thrones';
    public emoji = '';
    constructor(
        public char_name: string,
        public char_fam: string,
        public char_age: number,
        public img: string,
        public isAlive: boolean = true,
        public message: string = ''
    ) {
        this.id = Character.generateId();
    }
    death() {
        this.isAlive = false;
    }
    comunicate() {
        return this.message;
    }
}
