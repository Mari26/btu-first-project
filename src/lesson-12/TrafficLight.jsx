import React, { useState, useEffect } from 'react';

const colors = ['red', 'yellow', 'green'];

function TrafficLight(){

  const [colorIndex, setColorIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setColorIndex(prevIndex => (prevIndex + 1) % colors.length);
    }, 2000);

    return () => clearInterval(timer);
    
  }, []);
  const activeColor = colors[colorIndex];

  return (
    <div >
      <h1>შუქნიშანი</h1>
      <div className="traffic-light">
        <div 
          className={`light red ${activeColor === 'red' ? 'active' : ''}`}
        />
        <div 
          className={`light yellow ${activeColor === 'yellow' ? 'active' : ''}`}
        />
        <div 
          className={`light green ${activeColor === 'green' ? 'active' : ''}`}
        />
      </div>
    </div>
  );
}

export default TrafficLight;