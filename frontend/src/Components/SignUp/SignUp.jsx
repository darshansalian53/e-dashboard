import React, { useState } from "react";
import './SignUp.css';

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const collectData = () => {
        console.warn(name, email, password)
    }


    return (
        <div className="register">
            <h1>Register</h1>
            <form action="">
                <input className="inputbox" type="text"
                    value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />

                <input className="inputbox" type="text"
                    value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />

                <input className="inputbox" type="password"
                    value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
                <button onClick={collectData} className="appbutton" type="button"> Sign Up</button>
            </form>
        </div>
    )
}


export default SignUp;