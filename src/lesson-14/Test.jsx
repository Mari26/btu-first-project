import { useState } from "react";
import { Link } from 'react-router-dom';

const Test=()=>{
const [tests,setTests]=useState(
    [
        {id:1,txt:'რეაქტის სწავლა'},
        {id:2,txt:'ანგულარის სწავლა'},
        {id:3,txt:'ვუს სწავლა'}
    ]
);
const [newtests,setNewtests]=useState('');

const Addtext=(event)=>{
 event.preventDefault();
 if(newtests.trim()==='') return;

 const addnewtext ={
    id:Date.now(),
    txt:newtests
 }
setTests([...tests,addnewtext]);
setNewtests('');

}



    return(<div>
        <div style={{marginTop:"30px"}} >
            <form onSubmit={Addtext}>
                <input style={{width:"300px",height:"30px"}} type="text" placeholder="ახლის დამატება"
                value={newtests}
                onChange={(e)=>setNewtests(e.target.value)}
                
                
                />
                <button type='submit'  style={{borderRadius:"5px",height:"30px",width:"80px",backgroundColor:"palevioletred"}}>დამატება</button>
            </form>
        </div>
<ul>
    {tests.map(tes=>(
        <li key={tes.id}>{tes.txt}</li>
    ))}
</ul>
    </div>)
}

export default Test;