import React, { useState } from "react";
import {Data} from "../data"
const State = () =>{
const [state,setState]=useState(5);
const [boolean,setBulean]=useState(true);
const [info,setInfo]=useState(Data);
const [infotext,setInfotxt]=useState("");
const [infoemail,setInfoemail]=useState("");
const [isclicked,setIsclicked]=useState(false);


const click  = () =>{
setState("sdasd");
state ==5?setState("sdasd"):setState(5);
setBulean(!boolean)
setInfo(info.filter((item)=>{
    return item.id%2==0;
}))
}

const onclick = (e)=>{
// console.log(e.target.value)
setInfotxt(e.target.value)

}

const emailCange = (e)=>{
setInfoemail(e.target.value)
}

const Button = ()=>{
    setIsclicked(true)
}

    return (
        <div>
            {state}
            <button onClick={click}>clickme</button>
         {boolean==true?<p>ჭეშმარიტი</p>:<p>მცდარი</p>}
         <button onClick={click}>fillter</button>

{info.map((item,key)=>(<p key={key}>{item.title}</p>)) }
<button onClick={Button}>click</button>
{isclicked&&<p>{infotext}-{infoemail}</p>}

<form>
    <input type="text" onChange={onclick} placeholder="write some txt" value={infotext}/>
    <input type="email" onChange={emailCange} placeholder="write your email" value={infoemail}/>
</form>
        </div>
    )
}

export default State;