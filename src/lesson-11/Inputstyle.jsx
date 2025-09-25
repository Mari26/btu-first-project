import React, { useState } from "react";

const Inputstyle =()=>{

const [inputValue,setInputValue] =useState('');
const [texts, setTexts] = useState([]);
const [countable,setCountable]=useState(0);
 const [randomQuote, setRandomQuote] = useState('');


   const quotes = [
        "React is fun!",
        "Coding is creative.",
        "Keep learning!",
        "The best way to predict the future is to create it.",
        "Code more."
    ];

const emojis = ['😀', '😍', '🤔', '👍', '🥳', '🚀'];
const [selectedEmoji, setSelectedEmoji] = useState(null);

const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddText = () => {
        if (inputValue.trim() !== '') {
            setTexts([...texts, inputValue]);
            setInputValue('');
        }
    };

const clickbuton= ()=>{
    const butoonclick=countable+1;
    setCountable(butoonclick);
}
const generateQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const newQuote = quotes[randomIndex];
        setRandomQuote(newQuote);
    };

const handleEmojiClick = (emoji) => {
        setSelectedEmoji(emoji);
    };



    return (<div style={{margin:"30px"}}>
<input type="text" placeholder="ჩაწერე ტექსტი" value={inputValue} onChange={handleInputChange}/>
<button onClick={handleAddText}>დამატება</button>
<div style={{ marginTop: '20px' }}>
    {texts.map((text, index) => 
    ( <div key={index} style={{ marginBottom: '10px' }}>{text}</div>))}
           
            </div>


     <p>{countable}</p>
     <button onClick={clickbuton}>დააკლიკე</button>      

<div style={{margin:"30px"}}>
 <button  onClick={generateQuote}>რენდომ ფრაზა</button>
    <div style={{ 
                    marginTop: '20px',
                    padding: '20px',
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    maxWidth: '400px',
                    margin: '20px auto',
                    backgroundColor: '#f9f9f9'
                }}>
                    <h3>"{randomQuote}"</h3>
                </div>
</div>

      <div style={{ margin: '20px 0' }}>
                {emojis.map((emoji, index) => (
                    <button
                        key={index}
                        onClick={() => handleEmojiClick(emoji)}
                        style={{
                            fontSize: '30px',
                            margin: '5px',
                            cursor: 'pointer',
                            border: 'none',
                            background: 'none',
                            opacity: selectedEmoji === emoji ? 1 : 0.6,
                            transition: 'opacity 0.2s ease'
                        }}>
                        {emoji}
                    </button>
                ))}
            </div>
            <div style={{ fontSize: '24px', marginTop: '30px' }}>
    
                {selectedEmoji && (
                    <p>არჩეულია: {selectedEmoji}</p>
                )}
            </div>
    </div>)
}

export default Inputstyle;