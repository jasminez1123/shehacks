import React, { useState } from 'react';
import './App.css';
import Filter from './components/Filter';
import Camera from './components/Camera';

function App() {
  const [selectedParts, setSelectedParts] = useState([]);
  const [showCamera, setShowCamera] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <Filter />
      </header>
      <button className="next-button">Next</button>
    </div>
  );
}

export default App;