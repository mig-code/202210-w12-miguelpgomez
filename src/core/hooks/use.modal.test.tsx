import { act, fireEvent, render, screen } from '@testing-library/react';

import { CharacterOption } from '../data/characters.data';
import { mockAdvisor } from '../mocks/models.mocks';
import { useModal } from './use.modal';

describe(`Given useModal (custom hook)
            render with a virtual component`, () => {
    const mockPayload: CharacterOption = mockAdvisor;

    const TestComponent = () => {
        const { handleModal, isModalOpen, modalCharacter } = useModal();
        return (
            <>
                <button onClick={() => handleModal(mockPayload)}>
                    Show Modal
                </button>

                <div>
                    <ul>
                        {isModalOpen? <li>{modalCharacter.char_name}</li>:<li>EMPTY</li>}
                    </ul>
                </div>
            </>
        );
    };

    describe(`When component is loaded`, () => {
        jest.useFakeTimers();
        render(<TestComponent />);

        const buttons = screen.getAllByRole('button');
        fireEvent.click(buttons[0]);
        test('Then its should call handleModal', async () => {
            expect(
                await screen.findByText(mockAdvisor.char_name)
            ).toBeInTheDocument();
             act(() => {
                 jest.runOnlyPendingTimers();
             });

             expect(
                await screen.findByText('EMPTY')
            ).toBeInTheDocument();
             
            

        });
    });
});
