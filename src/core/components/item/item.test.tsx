import { render, screen } from '@testing-library/react';
import {
    CharacterContext,
    CharacterContextStructure,
} from '../../context/character.context';
import { mockAdvisor } from '../../mocks/models.mocks';
import Item from './item';

describe('Given Item component', () => {
    const handleUpdate = jest.fn();

    const mockContext = {
        handleUpdate,
    } as unknown as CharacterContextStructure;
    describe('When it has been render', () => {
        test('Then Advisor info should have been render', () => {
            render(<Item item={mockAdvisor} />);
            const textElement = screen.getByText(/Tyrion/i);
            expect(textElement).toBeInTheDocument();
        });
        test('Then user could interact with them if we render with context', async () => {
            render(
                <CharacterContext.Provider value={mockContext}>
                    <Item item={mockAdvisor}></Item>
                </CharacterContext.Provider>
            );

            const buttonDeath = screen.getAllByRole('button')[0];
            expect(buttonDeath).toBeInTheDocument();
            buttonDeath.click();
            expect(handleUpdate).toHaveBeenCalled();

            const buttonSpeak = screen.getAllByRole('button')[1];
            expect(buttonSpeak).toBeInTheDocument();
            buttonSpeak.click();
        });
    });
});
