import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';
const login = () => {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const navigate = useNavigate();
        useEffect(()=>{
            const auth= localStorage.getItem('user');
            if(auth){
                navigate("/")
            }
        },[])
        const handlelogin= async()=>{
            console.warn("email, password", email, password)
            let result = await fetch('http://localhost:5000/login', {
                method: 'post',
                body:JSON.stringify({email,password}),
                headers:{
                    'Content-Type': 'application/json'
                }
            });
            result = await result.json();
            console.warn(result)
            if(result.name){
                localStorage.setItem("user",JSON.stringify(result));
                navigate("/")
            }else{
                alert("please enter correct details")
            }
        }


    return (
        <div className="login">
            <h1>Login Page</h1>
            <form action="">

                <input className="inputbox" type="text"
                    value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />

                <input className="inputbox" type="password"
                    value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />

                <button onClick={handlelogin} className="appbutton" type="button"> Login</button>
            </form>
        </div>
    )
}

export default login