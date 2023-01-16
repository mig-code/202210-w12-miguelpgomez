import { useContext } from 'react';
import { CharacterContext } from '../../context/character.context';

import Item from '../item/item';

export default function List() {
    const { characters } = useContext(CharacterContext);

    return (
        <>
            <h1>Lista de personajes</h1>
            <ul className="characters-list row list-unstyled">
                {characters.map((item, index) => (
                    <li key={item.id} className="character col ">
                        <Item item={item}></Item>
                    </li>
                ))}
            </ul>
        </>
    );
}
