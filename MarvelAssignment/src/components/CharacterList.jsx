import { useState, useEffect } from 'react';
import axios from 'axios';

const Characterlist = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await axios.get('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=1a0c484f68687658d4aa72b855aa91ff&hash=fb23dde1372754316d1c25217b01fbdb');
                setCharacters(response.data)
            } catch (error) {
                console.error('Error fetching products', error)
            }
        }
        fetchCharacters();
    });
    return (
        <div>
            <h3>Characters</h3>
            <ul>
                {characters.map(character => {
                    <li key={character.id}>
                        {character.name} {character.thumbnail}
                    </li>
                })}
            </ul>
        </div>
    );
};

export default Characterlist