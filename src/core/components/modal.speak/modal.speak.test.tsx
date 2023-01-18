import React from 'react';
import { render, screen } from '@testing-library/react';

import {
    CharacterContext,
    CharacterContextStructure,
} from '../../context/character.context';
import { mockAdvisor } from '../../mocks/models.mocks';
import ModalSpeak from './modal.speak';

describe('Given ModalSpeak component', () => {
    const mockContextOpen = {
        isModalOpen: true,
        modalCharacter: mockAdvisor,
    } as unknown as CharacterContextStructure;
    test('renders List component', () => {
        render(
            <CharacterContext.Provider value={mockContextOpen}>
                <ModalSpeak />
            </CharacterContext.Provider>
        );

        const mockAdvisorMessage = screen.getByText(
            /No sé por qué, pero creo que voy a morir pronto/i
        );
        expect(mockAdvisorMessage).toBeInTheDocument();

        const openModalClass =
            // eslint-disable-next-line testing-library/no-node-access
            document.getElementsByClassName('comunications--on');
        expect(openModalClass).toHaveLength(1);
    });
});
