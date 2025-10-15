import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

const UserDetails=()=>{
    const {id}=useParams();
    const [user,setUser]=useState(null);
    const[loading,setLoading]=useState(true)
    const [error,setError]=useState(null);

    useEffect(()=>{
if(!id){
    setLoading(false);
    return;
}
fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(response=>{
    if(!response.ok){
        throw new Error('momxmarebeli ver moidzebna')

    }
    return response.json();
}).then (data=>{
    setUser(data);
    setLoading(false);
}).catch(error=>{
    setError(error);
    setLoading(false);
    console.error("Fetching error: ", error);
})

 },[id])
 if(loading){
   return <div>იტვირთებას</div>
}
if(error){
     return <div>შეცდომა: {error.message}</div>;
}
if(!user){
    return <div>მომხმარებელი ID: {id} ვერ მოიძებნა.</div>;
}
    return(<div>
<h1>მომხმარებლის დეტალები (ID: {id})</h1>
  
     <h2>{user.name}</h2>
      <p>მომხმარებლის სახელი: {user.username}</p>
      <p>ელფოსტა: {user.email}</p>
      <p>ქალაქი: {user.address.city}</p>
      <p>კომპანია: {user.company.name}</p>
       <Link to={`/users/${id}/edit`}>
          <button style={{ marginTop: '15px' }}>მონაცემების რედაქტირება</button>
      </Link>
    </div>)
}

export default UserDetails;