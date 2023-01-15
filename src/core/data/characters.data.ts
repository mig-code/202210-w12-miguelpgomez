import { Advisor } from '../models/advisor';
import { Character } from '../models/character';
import { Fighter } from '../models/fighter';
import { King } from '../models/king';
import { Squire } from '../models/squire';

export type Characters = Array<Character>;

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

export const charactersData: Characters = [
    joffreyBaratheon,
    jaimeLannister,
    daenerysTargaryen,
    tyrionLannister,
    bronn,
];
export const getCharactersData =() => charactersData;
