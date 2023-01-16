import { getCharactersData } from '../../data/characters.data';
import Item from '../item/item';

export default function List() {
    // Comment to not use UseEffect
    // const initialCharacters = getCharactersData() as Characters;
    // const [characters, setCharacters] = useState(initialCharacters);
    const characters = getCharactersData();

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
