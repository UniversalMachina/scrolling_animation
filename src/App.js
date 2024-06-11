import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    let scrollPercent = scrollTop / docHeight;  // Use let instead of const
    
    // Ensure scrollPercent never exceeds 1
    if (scrollPercent > 1) {
      scrollPercent = 1;
    }
    
    setScrollProgress(scrollPercent);
  };
  

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App relative w-screen h-[200vh] bg-white overflow-hidden">
      <div
        className="logo fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold transition-opacity duration-1000"
        style={{
          opacity: 1 - scrollProgress,
          zIndex: 1,
        }}
      >
        Your Logo
      </div>
      <div
  className="content-wrapper fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-500 text-white transition-transform duration-100"
  style={{
    clipPath: `polygon(${50 - scrollProgress * 50}% 0%, ${50 + scrollProgress * 50}% 0%, ${50 + scrollProgress * 50}% 100%, ${50 - scrollProgress * 50}% 100%)`,
    zIndex: 2,
  }}
>
  <div
    className="content"
    style={{
      transform: `rotate(${scrollProgress * 90}deg)`,
      transformOrigin: 'center center',
      width: '100vh',
      height: '100vw',
    }}
  >
    <div className="content-inner flex justify-center items-center w-full h-full">
      <h1 className="transform rotate-[270deg] font-semi text-[40px] whitespace-nowrap">Revealed Content</h1>
    </div>
  </div>
</div>
<div className="spacer h-[200vh]"></div>

    </div>
  );
}

export default App;
