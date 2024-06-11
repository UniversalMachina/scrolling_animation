import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / docHeight;
    setScrollProgress(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <div className="logo">Your Logo</div>
      <div
        className="content"
        style={{
          clipPath: `polygon(${50 - scrollProgress * 50}% 0%, ${50 + scrollProgress * 50}% 0%, ${50 + scrollProgress * 50}% 100%, ${50 - scrollProgress * 50}% 100%)`,
          transform: `rotate(${scrollProgress * 90}deg)`,
          transformOrigin: 'center center',
        }}
      >
        <div
          className="content-inner"
          style={{
            transform: `rotate(${90 - scrollProgress * 90}deg)`,
            transformOrigin: 'center center',
          }}
        >
          <h1>Revealed Content</h1>
        </div>
      </div>
      <div className="spacer"></div>
    </div>
  );
}

export default App;
