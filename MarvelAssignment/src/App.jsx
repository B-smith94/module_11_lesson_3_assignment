import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
import { useState } from 'react';
import './App.css'

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null)
  const handleCharacterSelect = (characterId) => {
    setSelectedCharacter(characterId)
  }

  return (
    <div>
      <h1>Marvel API Calls</h1>
      < CharacterList onCharacterSelect={handleCharacterSelect} />
      {selectedCharacter && (
        <CharacterDetail characterId={selectedCharacter}/>
      )}
    </div>
  )
}

export default App
