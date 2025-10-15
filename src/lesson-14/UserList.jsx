import React, {useEffect,useState} from "react";
import { Link } from "react-router-dom";

const UserList = ()=>{
const [users,setUsers]=useState([]);
const [loading,setLoading]=useState(true);
const [error,setError]=useState(null);

useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
    if(!response.ok){
        throw new Error(`Fetch failed with status: ${response.status}`);
    }
    return response.json();
}).then(data=>{setUsers(data);
    setLoading(false);
}).catch(error=>{setError(error);
    setLoading(false);
    console.log(error);
})},[]);

if(loading){
      return <div>იტვირთება...</div>;
}

if(error){
    return <div>{error.message}</div>
}



    return (<div>
<h1>მომხმარებლები</h1>
<ul>
    {users.map(user=>(
        <li key={user.id} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>

  <span>{user.name} - {user.username} - {user.email}</span>
            <br />
            <Link to={`/users/${user.id}`}>
              <button>დეტალები</button>
            </Link>
        </li>
    ))

    }
</ul>

    </div>)
}

export default UserList;