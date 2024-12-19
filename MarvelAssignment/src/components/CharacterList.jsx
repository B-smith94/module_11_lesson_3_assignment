import { useState, useEffect } from 'react';
import axios from 'axios';

const Characterlist = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await axios.get('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=<YOUR PUBLIC KEY>&hash=<YOUR HASH>');
                console.log(response.data.data.results);
                setCharacters(response.data.data.results)
                
            } catch (error) {
                console.error('Error fetching characters', error)
            }
        }
            fetchCharacters();

    }, []);

    const characterList = characters.map((character, index)=> {
        return (
        <li key={index} style={{ listStyle: "none" }}>
            {character.name} <img src={`${character.thumbnail.path}/portrait_medium.jpg`} alt="" />
        </li>
        )

    })

    return (
        <div>
            <h3>Characters</h3>
            <ul>
                {characterList}
            </ul>
        </div>
    );
};

export default Characterlist