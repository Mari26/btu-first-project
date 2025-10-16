import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function UserList() {
  const API_URL = 'https://jsonplaceholder.typicode.com/users';
  
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUsers = () => {
    setLoading(true);
    setError(null);
    fetch(API_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to fetch users (Status: ${response.status})`);
        }
        return response.json();
      })
      .then(data => {
        setUsers(data); 
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
        console.error("Fetching error: ", error);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = (userId, userName) => {
    const isConfirmed = window.confirm(`ნამდვილად გინდა მომხმარებლის წაშლა: ${userName} (ID: ${userId})?`);
    
    if (isConfirmed) {
      fetch(`${API_URL}/${userId}`, {
        method: 'DELETE',
      })
      .then(response => {
        if (response.ok) {
          setUsers(currentUsers => currentUsers.filter(user => user.id !== userId));
          
          alert(`მომხმარებელი ${userName} (ID: ${userId}) წარმატებით ამოღებულია სიიდან. (სერვერის სტატუსი: ${response.status} OK)`);
          console.log(`DELETE მოთხოვნა ${API_URL}/${userId}-ზე წარმატებით გაგზავნილია (Status: ${response.status}).`);
        
        } else {
          throw new Error(`წაშლა ვერ მოხერხდა. სერვერის სტატუსი: ${response.status}`);
        }
      })
      .catch(error => {
        alert(`წაშლის შეცდომა: ${error.message}`);
        console.error("DELETE Error:", error);
      });
    }
  };


  if (loading) {
    return <div>იტვირთება...</div>;
  }

  if (error) {
    return <div>შეცდომა მონაცემების მოპოვებისას: {error.message}</div>;
  }

  return (
    <div>
      <h1>მომხმარებლები (JSONPlaceholder)</h1>
      <ul>
        {users.map(user => (
          <li 
            key={user.id} 
            style={{ 
              marginBottom: '20px', 
              border: '1px solid #ccc', 
              padding: '10px', 
              display: 'flex', 
              alignItems: 'center' 
            }}
          >
            <span style={{ flexGrow: 1 }}>
              **{user.name}** ({user.username}) - {user.email}
            </span>
            
            <Link to={`/users/${user.id}`} style={{ marginRight: '10px' }}>
              <button>დეტალები</button>
            </Link>
            
            <button 
              onClick={() => handleDelete(user.id, user.name)}
              style={{ backgroundColor: 'red', color: 'white' }}
            >
              წაშლა
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;