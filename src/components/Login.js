import React, { useState } from "react";
import { useHistory } from "react-router-dom";


function Login({ setCurrentUser }) {
    const [username, setUsername] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        })
        .then((r) => r.json())
        .then((data) => {
            console.log(data)
            setCurrentUser(data.user)
            localStorage.setItem("token", data.token)
            history.push("/profile")
        })
    }

    return (
        <div>
            <form className="login-form" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <label htmlFor="username">Username</label>
                <input 
                    type = "text"
                    id = "username"
                    autoComplete = "off"
                    value = {username}
                    onChange = {(e) => setUsername(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    type = "password"
                    id = "password"
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)}
                    autoComplete = "current-password"
                />
                <input type="submit" value="Login" />
            </form>
        </div>
    )

}

export default Login;