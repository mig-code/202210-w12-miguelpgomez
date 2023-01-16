import { fireEvent, render, screen } from '@testing-library/react';

import { useCharacters } from './use.characters';
import { CharacterOption } from '../data/characters.data';
import { mockAdvisor } from '../mocks/models.mocks';

describe(`Given useCharacter (custom hook)
            render with a virtual component`, () => {
    const mockPayload: Partial<CharacterOption> = {
        id: '1',
    };

    const TestComponent = () => {
        const { getCharacters, handleUpdate } = useCharacters();
        return (
            <>
                <button onClick={() => handleUpdate(mockPayload)}>
                    Update
                </button>

                <div>
                    <ul>
                        {getCharacters().map((item) => (
                            <li key={item.id}>{item.char_name}</li>
                        ))}
                    </ul>
                </div>
            </>
        );
    };

    describe(`When component is loaded`, () => {
        render(<TestComponent />);
        const buttons = screen.getAllByRole('button');
        test('Then its should call handleUpdate', async () => {
            expect(
                await screen.findByText(mockAdvisor.char_name)
            ).toBeInTheDocument();

            fireEvent.click(buttons[0]);
        });
    });
});
