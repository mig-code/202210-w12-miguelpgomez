import React from 'react';
import { render, screen } from '@testing-library/react';

import List from './list';
import {
    CharacterContext,
    CharacterContextStructure,
} from '../../context/character.context';
import { mockAdvisor, mockFighter } from '../../mocks/models.mocks';

describe('Given List component', () => {
    const mockContext = {
        characters: [mockAdvisor, mockFighter],
    } as unknown as CharacterContextStructure;
    test('renders List component', () => {
        render(
            <CharacterContext.Provider value={mockContext}>
                <List />
            </CharacterContext.Provider>
        );
        const dataTestId = screen.getByTestId('characters-list');
        expect(dataTestId).toBeInTheDocument();
        const mockAdvisorElement = screen.getByText(/Tyrion/i);
        expect(mockAdvisorElement).toBeInTheDocument();
    });
});
