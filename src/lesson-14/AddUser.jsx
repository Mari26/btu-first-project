import React,{useState} from "react";
import { useNavigate } from 'react-router-dom';

const AddUser=()=>{
  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const newUser = { name, job };
    
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Server responded with status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        
        setMessage(`წარმატება! ახალი მომხმარებელი ID: ${data.id} (სახელი: ${data.name}) შეიქმნა.`);
        
        setTimeout(() => {
          navigate('/users');
        }, 10000);

      })
      .catch(error => {
        setMessage(`შეცდომა: ${error.message}`);
        console.error('POST Error:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <h1>ახალი მომხმარებლის დამატება</h1>
      
      {message && <p style={{ color: message.startsWith('შეცდომა') ? 'red' : 'green', fontWeight: 'bold' }}>{message}</p>}
      
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">სახელი:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={loading}
            required
          />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label htmlFor="job">პოზიცია:</label>
          <input
            id="job"
            type="text"
            value={job}
            onChange={(e) => setJob(e.target.value)}
            disabled={loading}
            required
          />
        </div>
        <button type="submit" disabled={loading} style={{ marginTop: '15px' }}>
          {loading ? 'იტვირთება...' : 'მომხმარებლის დამატება'}
        </button>
      </form>
    

    </div>)
}

export default AddUser;