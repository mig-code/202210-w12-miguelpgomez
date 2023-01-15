import { Advisor } from './advisor';
import { Character } from './character';
import { Fighter } from './fighter';
import { King } from './king';
import { mockAdvisor, mockFighter } from '../mocks/models.mocks';
import { Squire } from './squire';

describe('Given "Characters models', () => {
    const mockName = 'Test name';
    const mockFam = 'Test family';
    const mockAge = 23;
    const mockImg = 'Test img';
    describe('Given "Character" data model', () => {
        test('Then it should instantiate a Character', () => {
            const mockisAlive = true;
            const mockMessage = 'Test message';

            const result = new Character(
                mockName,
                mockFam,
                mockAge,
                mockImg,
                mockisAlive,
                mockMessage
            );
            expect(result).toBeInstanceOf(Character);
            expect(result).toHaveProperty('char_name', mockName);
            expect(result).toHaveProperty('char_fam', mockFam);
            expect(result).toHaveProperty('char_age', mockAge);
            expect(result).toHaveProperty('img', mockImg);
            expect(result).toHaveProperty('isAlive', mockisAlive);
            expect(result).toHaveProperty('message', mockMessage);
            result.death();
            expect(result).toHaveProperty('isAlive', false);
            result.comunicate();
            expect(result).toHaveProperty('message', mockMessage);
        });
    });
    describe('Given "Advisor" data model', () => {
        test('Then it should instantiate an advisor', () => {
            const mockAdvises = mockAdvisor;
            const result = new Advisor(
                mockName,
                mockFam,
                mockAge,
                mockImg,
                mockAdvises
            );
            expect(result).toBeInstanceOf(Advisor);
            expect(result).toHaveProperty('char_name', mockName);
            expect(result).toHaveProperty('char_fam', mockFam);
            expect(result).toHaveProperty('char_age', mockAge);
            expect(result).toHaveProperty('img', mockImg);
            expect(result).toHaveProperty('advises', mockAdvises);
            expect(result).toHaveProperty(
                'message',
                'No sé por qué, pero creo que voy a morir pronto'
            );
            expect(result).toHaveProperty('emoji', '🎓');
        });
    });
    describe('Given "Fighter" data model', () => {
        test('Then it should instantiate an Fighter', () => {
            const mockWeapon = 'Test weapon';
            const mockSkill = 23;
            const result = new Fighter(
                mockName,
                mockFam,
                mockAge,
                mockImg,
                mockWeapon,
                mockSkill
            );
            expect(result).toBeInstanceOf(Fighter);
            expect(result).toHaveProperty('char_name', mockName);
            expect(result).toHaveProperty('char_fam', mockFam);
            expect(result).toHaveProperty('char_age', mockAge);
            expect(result).toHaveProperty('img', mockImg);
            expect(result).toHaveProperty('weapon', mockWeapon);
            expect(result).toHaveProperty('skill', mockSkill);
            expect(result).toHaveProperty(
                'message',
                'Primero pego y luego pregunto'
            );
            expect(result).toHaveProperty('emoji', '🗡');
        });
    });
    describe('Given "King" data model', () => {
        test('Then it should instantiate an King', () => {
            const regnalYears = 23;
            const result = new King(
                mockName,
                mockFam,
                mockAge,
                mockImg,
                regnalYears
            );
            expect(result).toBeInstanceOf(King);
            expect(result).toHaveProperty('char_name', mockName);
            expect(result).toHaveProperty('char_fam', mockFam);
            expect(result).toHaveProperty('char_age', mockAge);
            expect(result).toHaveProperty('img', mockImg);
            expect(result).toHaveProperty('regnalYears', regnalYears);
            expect(result).toHaveProperty('message', 'Vais a morir todos');
            expect(result).toHaveProperty('emoji', '👑');
        });
    });
    describe('Given "Squire" data model', () => {
        test('Then it should instantiate an Squire', () => {
            const mockServe = mockFighter;
            const mockFidelity = 4;

            const result = new Squire(
                mockName,
                mockFam,
                mockAge,
                mockImg,
                mockServe,
                mockFidelity
            );
            expect(result).toBeInstanceOf(Squire);
            expect(result).toHaveProperty('char_name', mockName);
            expect(result).toHaveProperty('char_fam', mockFam);
            expect(result).toHaveProperty('char_age', mockAge);
            expect(result).toHaveProperty('img', mockImg);
            expect(result).toHaveProperty('serve', mockServe);
            expect(result).toHaveProperty('fidelity', mockFidelity);
            expect(result).toHaveProperty('message', 'Soy un loser');
            expect(result).toHaveProperty('emoji', '🛡');
        });
    });
});
