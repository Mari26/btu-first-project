import React, { useState, useEffect } from 'react';
function ScrollPosition() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    
  }, []); 

  return (
    <div className="scroll-tracker">
      <p>შენ ახლა <strong>{Math.round(scrollY)}</strong> პიქსელზე ხარ ჩამოსქროლილი.</p>
    </div>
  );
}

export default ScrollPosition;