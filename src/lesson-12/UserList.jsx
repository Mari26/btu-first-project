import React, { useState, useEffect } from 'react';

const UserList= ()=>{
  const [users, setUsers] = useState([]);
  const [, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {

        setUsers(data);
      })
      .catch(error => {
        setError(error.message);
      })
      
  }, []); 
 
    return (<div style={{maxwidth: "800px",
  margin: "0 auto",
  background: "white",
  padding: "20px",
  borderradius: "8px",
  boxshadow: "0 2px 10px rgba(0,0,0,0.1)"}}>

<h1>მომხმარებლების სია</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>)
}

export default UserList;