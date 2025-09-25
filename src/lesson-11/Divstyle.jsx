import React, { useState } from "react";

const Divstyle= () =>{

    const [colorchange,setColorchange]=useState(0);

    const colors=["red","green","blue"];

    const clickButton=()=>{
        const colorchangee=(colorchange+1)% colors.length;
        setColorchange(colorchangee);

    }

    return(<div>
<button onClick={clickButton} style={{margin:"20px"}}>დააჭირე ფერის შესაცვლელად</button>
<div style={{backgroundColor:colors[colorchange], width: '100px',height: '100px',}}></div>


    </div>)
}




export default Divstyle;