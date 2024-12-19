import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Characters.module.css'


const Characterlist = ({ onCharacterSelect }) => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await axios.get('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=<>&hash=<>');
                setCharacters(response.data.data.results)
                console.log(response.data.data.results);

            } catch (error) {
                console.error('Error fetching characters', error)
            }
        }
            fetchCharacters();
    }, []);


    const characterList = characters.map((character, index)=> {
        return (
        <div className={styles.container} key={index}>
            <div>{character.name}</div>
            <button onClick={() => onCharacterSelect(character.id)}>
                <img className={styles.img} src={`${character.thumbnail.path}/landscape_small.jpg`} alt="image not available" />
            </button>
        </div>
        )

    })

    return (
        <div>
            <h3>Characters</h3>
                {characterList}
        </div>
    );
};

export default Characterlist