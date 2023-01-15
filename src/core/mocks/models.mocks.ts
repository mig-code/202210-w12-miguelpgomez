import { Advisor } from '../models/advisor';
import { Fighter } from '../models/fighter';

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
