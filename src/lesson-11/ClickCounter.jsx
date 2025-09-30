import React, { useState, useEffect } from 'react';


const ClickCounter = ()=>{
const [clicks, setClicks] = useState(0);
 const [timeLeft, setTimeLeft] = useState(5);
const [isActive, setIsActive] = useState(false);

 useEffect(() => {
     if (!isActive || timeLeft === 0) {
        if (timeLeft === 0) {
        setIsActive(false);
      }
      return; 
    }

 const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);
return () => clearInterval(timer);
    
  }, [isActive, timeLeft]);

 const handleStartGame = () => {
    setIsActive(true); 
    setClicks(0);    
    setTimeLeft(5);   

  };
 const handleClick = () => {
   
    if (isActive) {
      setClicks(prevClicks => prevClicks + 1);
    }
  };
   return ( <div style={{ textAlign: 'center', fontFamily: 'sans-serif', marginTop: '50px' }}>
      <h1>Click Me Fast!</h1>
      
      {isActive && <p style={{ fontSize: '2em' }}>დრო: {timeLeft}</p>}
      
      <p style={{ fontSize: '1.5em' }}>კლიკები: {clicks}</p>
      
      <button 
        onClick={isActive ? handleClick : handleStartGame} 
        style={{ padding: '20px 40px', fontSize: '24px', cursor: 'pointer' ,margin:"20px"}}>
     
        {isActive ? 'Click!' : 'თამაშის დაწყება'}
      </button>
      {!isActive && timeLeft === 0 && (
        <div style={{ marginTop: '20px' }}>
          <h2>თამაში დასრულდა!</h2>
          <p style={{ fontSize: '2em', color: 'darkgreen' }}>
            შენ დააჭირე {clicks} ჯერ!
          </p>

        </div>
      )}
    </div>)
}

export default ClickCounter