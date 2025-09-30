import React, { useRef } from 'react';

function FocusComponent() {
  const inputRef = useRef(null);
  const handleFocusClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'sans-serif', marginTop: '50px' }}>
    
      <input 
        ref={inputRef} 
        type="text" 
        placeholder="დააჭირე ღილაკს"
        style={{ padding: '10px', fontSize: '16px', marginRight: '10px',borderColor:"Blue" }}
      />
      
      <button 
        onClick={handleFocusClick}
        style={{ padding: '10px 20px', fontSize: '16px',backgroundColor:"red" }}
      >
        ფოკუსი
      </button>
    </div>
  );
}

export default FocusComponent;