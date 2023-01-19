import { Advisor } from '../models/advisor';

import { Fighter } from '../models/fighter';
import { King } from '../models/king';
import { Squire } from '../models/squire';

export type CharactersOptions = Array<CharacterOption>;

export type CharacterOption = {
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
    advises?: Fighter | King | Advisor | Squire;
    weapon?: string;
    skill?: number;
    regnalYears?: number;
    serve?: Fighter;
    fidelity?: number;
};

const joffreyBaratheon = new King(
    'Joffrey',
    'Baratheon',
    13,
    'img/joffrey.jpg',
    2
);
const jaimeLannister = new Fighter(
    'Jaime',
    'Lannister',
    35,
    'img/jaime.jpg',
    'Daga',
    5
);
const daenerysTargaryen = new Fighter(
    'Daenerys',
    'Targaryen',
    22,
    'img/daenerys.jpg',
    'Dragón',
    10
);
const tyrionLannister = new Advisor(
    'Tyrion',
    'Lannister',
    39,
    'img/tyrion.jpg',
    daenerysTargaryen
);
const bronn = new Squire('Bronn', '', 42, 'img/bronn.jpg', jaimeLannister, 10);

export const charactersData: CharactersOptions = [
    joffreyBaratheon,
    jaimeLannister,
    daenerysTargaryen,
    tyrionLannister,
    bronn,
];
export const getCharactersData = () => charactersData;
