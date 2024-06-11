import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRevealed(true);
    }, 1000); // Adjust the delay to your preference
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <div className={`logo ${isRevealed ? 'hide' : ''}`}>Your Logo</div>
      <div className={`content ${isRevealed ? 'reveal' : ''}`}>
        <h1>Revealed Content</h1>
      </div>
    </div>
  );
}

export default App;
