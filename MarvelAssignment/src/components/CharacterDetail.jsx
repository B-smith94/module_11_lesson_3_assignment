import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const CharacterDetails = () => {
    const [hero, setHero] = useState([]);
    const [errors, setErrors] = useState({})
    const idRef = useRef(null)

    const validateForm = () => {
        const errors = {};
        const id = idRef.current.value;
        if (!id) errors.id = 'Character ID number is required'
        return errors;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length === 0) { //checks how many keys return. If 0, product is ssubmitted and logged
            const id = idRef.current.value;
            console.log('Searching Character ID:', id);
        } else {
            setErrors(errors) // if errors is longer than 0, then error messages are returned
        }
    };

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await axios.get(`gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=2c38d2f50c1dafd6d0b666d561b6b2dd&hash=ec985be0cde1d02176d8beaad6d9fdac`);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching products', error)
            }
        }
        if (idRef) {
            fetchCharacters()
        }
    }, [idRef]);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Search Character ID</h3>
                <label>
                    <p>ID Number:</p> 
                    <input type="number" ref={idRef} />
                    {errors.id && <div style={{ color: 'red' }}>{errors.id}</div>}
                </label>
                <button type='submit'>Submit</button>
            </form>
            <br />
            <ul>
                {hero.map(character => {
                    <li key={character.id}>
                        {character.name}: {character.description},
                        <br />
                        Comics: {character.ComicList}
                    </li>
                })}
            </ul>
        </div>
    );
};

export default CharacterDetails;