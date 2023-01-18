import { Advisor } from '../models/advisor';
import { Fighter } from '../models/fighter';
import { King } from '../models/king';
import { Squire } from '../models/squire';

export const mockFighter = new Fighter(
    'Jaime',
    'Lannister',
    35,
    'img/jaime.jpg',
    'Daga',
    5
);
export const mockAdvisor = new Advisor(
    'Tyrion',
    'Lannister',
    39,
    'img/tyrion.jpg',
    mockFighter
);

export const mockKing = new King(
    'Joffrey',
    'Baratheon',
    19,
    'img/robert.jpg',
    3
);

export const mockSquire = new Squire(
    'Bronn',
    'Lannister',
    35,
    'img/bronn.jpg',
    mockFighter,
    4
);
