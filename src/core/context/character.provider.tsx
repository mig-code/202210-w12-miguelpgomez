import { useMemo } from 'react';
import { useCharacters } from '../components/hooks/use.characters';
import { CharacterContext } from './character.context';

export function CharacterContextProvider({
    children,
}: {
    children: JSX.Element;
}) {
    const { getCharacters } = useCharacters();
    const context = useMemo(
        () => ({
            characters: getCharacters(),
        }),
        [getCharacters]
    );

    return (
        <CharacterContext.Provider value={context}>
            {children}
        </CharacterContext.Provider>
    );
}
