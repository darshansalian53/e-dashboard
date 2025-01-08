import React, {useState} from "react";
import './Login.css';
const login = () => {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const handlelogin=()=>{
            console.warn(email, password)
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