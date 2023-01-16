import React from 'react';
import { render, screen } from '@testing-library/react';

import List from './list';

test('renders List component', () => {
    render(<List />);
    const heading = screen.getByText(/Lista de personajes/i);
    expect(heading).toBeInTheDocument();
});
