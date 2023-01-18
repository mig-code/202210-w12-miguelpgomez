import { fireEvent, render, screen } from '@testing-library/react';
import {
    CharacterContext,
    CharacterContextStructure,
} from '../../context/character.context';
import { mockAdvisor, mockFighter, mockKing, mockSquire } from '../../mocks/models.mocks';
import Item from './item';

describe('Given Item component', () => {
    const handleUpdate = jest.fn();
    const handleModal = jest.fn();

    const mockContext = {
        handleUpdate,
        handleModal,
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
            fireEvent.click(buttonDeath);
            expect(handleUpdate).toHaveBeenCalled();

            const buttonSpeak = screen.getAllByRole('button')[1];
            expect(buttonSpeak).toBeInTheDocument();
            fireEvent.click(buttonSpeak);
            expect(handleUpdate).toHaveBeenCalled();
        });
        test('Then info Advisor should render death', async () => {
            mockAdvisor.isAlive = false;
            render(<Item item={mockAdvisor}></Item>);
            const element = screen.getByTestId('thumbs-down');
            expect(element).toBeInTheDocument();
        });
        test('Then a King info should have been render', () => {
            render(<Item item={mockKing} />);
            const textElement = screen.getByText(/reinado/i);
            expect(textElement).toBeInTheDocument();
        });
        test('Then a Squire info should have been render', () => {
            render(<Item item={mockSquire} />);
            const textElement = screen.getByText(/Peloteo/i);
            expect(textElement).toBeInTheDocument();
        });
         test('Then a Fighter info should have been render', () => {
             render(<Item item={mockFighter} />);
             const textElement = screen.getByText(/Arma/i);
             expect(textElement).toBeInTheDocument();
         });

    
    });
});
