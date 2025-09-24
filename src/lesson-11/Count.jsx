import React, { useState } from "react";

const Count = ()=>{
const [countnum,setCountnum]=useState(0);
const [enterpas,setEnterpas]=useState('');
const [isPasswordVisible, setIsPasswordVisible] = useState(false);

const clickIn= ()=>{
    setCountnum(countnum+1);
}

const clickDe=()=>{
    setCountnum(countnum-1);
}

const clickRe=()=>{
    setCountnum(0);
}

 const PasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
    return(
        <div>
        <p>{countnum}</p>
        <button style={{margin:"20px",color:"Highlight",width:"80px"}} onClick={clickIn}>გაზრდა</button>
        <button style={{margin:"20px",color:"pink",width:"80px"}} onClick={clickDe}>შემცირება</button>
        <button style={{margin:"20px",color:"green",width:"80px"}} onClick={clickRe}>Reset</button>
        
        <input type={isPasswordVisible ? 'text' : 'password'} placeholder="chawere paroli" value={enterpas}  
        onChange={(e) => setEnterpas(e.target.value)}/>
        <button onClick={PasswordVisibility}> {isPasswordVisible ? 'დამალე' : 'გამოაჩინე'}</button>
        
        
        </div>
    )
}

export default Count;