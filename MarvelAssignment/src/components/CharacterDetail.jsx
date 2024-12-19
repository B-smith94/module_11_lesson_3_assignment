import { useState, useEffect } from 'react';
import axios from 'axios';

const CharacterDetail = ({ characterId }) => {
    const [character, setCharacter] = useState([])

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const response = await axios.get(`https://gateway.marvel.com/v1/public/characters/${characterId}?ts=1&apikey=<>&hash=<>`);
                setCharacter(response.data.data.results)
                console.log(character)

            } catch (error) {
                console.error('Error fetching data', error)
            }
        }
        
        if(characterId) {
            fetchCharacter()
        }
    }, [characterId]);
    return (
        <div>
            <h4>Name: </h4>
            <p>{character[0].name}</p>
            <h4>Description:</h4>
            <p>{character[0].description}</p>
            <h4>Comics:</h4>
            <ul>
                {character[0].comics.items.map((item, index) => {
                    <li key={index}>{item.name}</li>    
                })}
            </ul>
        </div>
    )
}

export default CharacterDetail;

/*

*/