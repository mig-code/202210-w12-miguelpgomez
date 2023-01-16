import { render, screen } from '@testing-library/react';

import { mockAdvisor } from '../../mocks/models.mocks';

import Item from './item';

describe('Given Item component', () => {
    describe('When it has been render', () => {
        test('Then Advisor info should have been render', () => {
            render(<Item item={mockAdvisor} />);
            const textElement = screen.getByText(/Tyrion/i);
            expect(textElement).toBeInTheDocument();
        });
    });
});
