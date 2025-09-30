import React, { useState, useEffect } from 'react';

const Timer = () =>{
     const [seconds, setSeconds] = useState(0);

useEffect(()=>{
     const intervalId = setInterval(() => {
    setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
      return () => clearInterval(intervalId);
},[])


    return (<div style={{margin:"30px"}}>
        <div style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>davaleba 12-ავტომატური წამმზომი</h1>
      <p style={{ fontSize: '3rem', fontWeight: 'bold' }}>{seconds} წამი</p>
    </div>
    </div>)
}

export default Timer;