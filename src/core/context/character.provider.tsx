import { useMemo } from 'react';
import { useCharacters } from '../hooks/use.characters';
import { useModal } from '../hooks/use.modal';
import { CharacterContext } from './character.context';

export function CharacterContextProvider({
    children,
}: {
    children: JSX.Element;
}) {
    const { getCharacters, handleUpdate } = useCharacters();
    const { isModalOpen, handleModal, modalCharacter } = useModal();
    const context = useMemo(
        () => ({
            characters: getCharacters(),
            handleUpdate,
            isModalOpen,
            handleModal,
            modalCharacter,
        }),
        [getCharacters, handleUpdate, isModalOpen, handleModal, modalCharacter]
    );

    return (
        <CharacterContext.Provider value={context}>
            {children}
        </CharacterContext.Provider>
    );
}
