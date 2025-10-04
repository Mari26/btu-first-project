import React, { useState, useEffect } from 'react';

const Statesto= ()=>{
const[fact,setFact]=useState('');


useEffect(()=>{
fetch('https://catfact.ninja/fact').
then(res=>res.json()).then(
    result=>{setFact(result.fact)})


},[]);





return(<div>
<p>{fact}</p>
</div>)

}

export default Statesto;