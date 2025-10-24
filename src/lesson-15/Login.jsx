import { useAuth } from "../context/AuthContext";
import React from 'react';

const Login=()=>{
    const {login} = useAuth();

    return (<div style={{ padding: '20px', background: '#f0f0f0' }}>
        <h2>გთხოვთ, გაიაროთ ავტორიზაცია</h2>
        <button onClick={login}>შესვლა</button>
    </div>)
}
export default Login;