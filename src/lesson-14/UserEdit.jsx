import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function UserEdit() {
  const { id } = useParams(); 
  const navigate = useNavigate();
 
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState(''); 

  const [loading, setLoading] = useState(true);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('მომხმარებელი ვერ მოიძებნა');
        }
        return response.json();
      })
      .then(data => {
        setUserName(data.name || ''); 
        setUserEmail(data.email || ''); 
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
        console.error("Fetch Error:", err);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitLoading(true);
    setMessage('');

    const updatedUser = { 
        id: id,
        name: userName, 
        email: userEmail, 
       
    };

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUser),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`განახლება ვერ მოხერხდა. Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        
        setMessage(`წარმატებით განახლდა! განახლებული სახელი: ${data.name}`);
        setSubmitLoading(false);
        

      })
      .catch(err => {
        setMessage(`შეცდომა განახლებისას: ${err.message}`);
        setSubmitLoading(false);
        console.error("PUT Error:", err);
      });
  };

  if (loading) {
    return <div>იტვირთება მონაცემები...</div>;
  }

  if (error) {
    return <div>შეცდომა: მომხმარებელი ID {id} ვერ მოიძებნა.</div>;
  }

  return (
    <div>
      <h1>მომხმარებლის რედაქტირება (ID: {id})</h1>
      
      {message && <p style={{ color: message.includes('შეცდომა') ? 'red' : 'green', fontWeight: 'bold' }}>{message}</p>}
      
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">სახელი:</label>
          <input
            id="name"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            disabled={submitLoading}
            required
          />
        </div>
        
        <div style={{ marginTop: '10px' }}>
          <label htmlFor="email">ელფოსტა:</label>
          <input
            id="email"
            type="email"
            value={userEmail}
           
            disabled
            style={{ backgroundColor: '#eee' }}
          />
        </div>
        
        <button type="submit" disabled={submitLoading} style={{ marginTop: '15px' }}>
          {submitLoading ? 'ინახება...' : 'მონაცემების შენახვა'}
        </button>
      </form>
      
      <button 
        onClick={() => navigate(`/users/${id}`)} 
        style={{ marginTop: '10px', marginLeft: '10px', backgroundColor: '#ccc' }}
      >
        უკან დაბრუნება
      </button>
    </div>
  );
}

export default UserEdit;