import { useMemo } from 'react';
import { getCharactersData } from '../data/characters.data';
import { CharacterContext } from './character.context';

export function CharacterContextProvider({
    children,
}: {
    children: JSX.Element;
}) {
    const characters = getCharactersData();
    const context = useMemo(
        () => ({
            characters,
        }),
        [characters]
    );

    return (
        <CharacterContext.Provider value={context}>
            {children}
        </CharacterContext.Provider>
    );
}
