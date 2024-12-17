import { useState, useEffect } from 'react';
import axios from 'axios';

const Characterlist = (characterId) => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await axios.get('gateway.marvel.com/v1/public/characters/{characterId}?ts=1&apikey=1a0c484f68687658d4aa72b855aa91ff&hash=fb23dde1372754316d1c25217b01fbdb');
                setCharacters(response.data)
            } catch (error) {
                console.error('Error fetching products', error)
            }
        }
        if (characterId) {
            fetchCharacters()
        }
    }, [characterId]);

    return (
        <div>
            <h3>Characters</h3>
            <ul>
                {characters.map(character => {
                    <li key={character.character.id}>
                        {character.character.name}: {character.character.description}
                        Comics: {character.character.ComicList}
                    </li>
                })}
            </ul>
        </div>
    );
};

export default CharacterDetails;