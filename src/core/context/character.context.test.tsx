import { render, screen } from '@testing-library/react';
import { useContext } from 'react';
import { mockAdvisor } from '../mocks/models.mocks';

// Se importa directamente el initialContext
// para que el test utilice las funciones definidas en él
import { initialContext, CharacterContext } from './character.context';

initialContext.characters = [mockAdvisor];

describe('Given the context CharacterContext', () => {
    let TestComponent: () => JSX.Element;
    describe('When a Test Component is wrapper with this context', () => {
        beforeEach(() => {
            TestComponent = () => {
                const { characters } = useContext(CharacterContext);
                return <>{characters[0].char_name}</>;
            };
        });
        test('Context values should be used in the component', () => {
            render(
                <CharacterContext.Provider value={initialContext}>
                    <TestComponent></TestComponent>
                </CharacterContext.Provider>
            );
            const element = screen.getByText(
                initialContext.characters[0].char_name
            );
            expect(element).toBeInTheDocument();
        });
    });
});
