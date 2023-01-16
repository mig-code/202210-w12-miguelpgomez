import { useMemo } from 'react';
import { useCharacters } from '../hooks/use.characters';
import { CharacterContext } from './character.context';

export function CharacterContextProvider({
    children,
}: {
    children: JSX.Element;
}) {
    const { getCharacters, handleUpdate } = useCharacters();
    const context = useMemo(
        () => ({
            characters: getCharacters(),
            handleUpdate,
        }),
        [getCharacters, handleUpdate]
    );

    return (
        <CharacterContext.Provider value={context}>
            {children}
        </CharacterContext.Provider>
    );
}
