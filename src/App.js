import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedParts, setSelectedParts] = useState([]);

  const bodyParts = ['Torso', 'Face', 'Legs', 'Arms', 'Feet'];

  const handleSelection = (part) => {
    setSelectedParts((prevSelectedParts) =>
      prevSelectedParts.includes(part)
        ? prevSelectedParts.filter((p) => p !== part)
        : [...prevSelectedParts, part]
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Select the body parts you want to feature in the photo:</p>
        <div className="body-parts">
          {bodyParts.map((part) => (
            <label key={part} className="body-part-label">
              <input
                type="checkbox"
                checked={selectedParts.includes(part)}
                onChange={() => handleSelection(part)}
              />
              {part}
            </label>
          ))}
        </div>
        <button className="next-button">Next</button>
      </header>
    </div>
  );
}

export default App;