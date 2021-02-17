import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Signup({ setCurrentUser }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")

    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:3000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, name, password })
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
                <h1>Hello & Welcome!</h1>
                <label htmlFor="username">Username:</label>
                <input 
                    className = "login-form-input"
                    type = "text"
                    placeholder = "Username"
                    id = "username"
                    autoComplete = "off"
                    value = {username}
                    onChange = {(e) => setUsername(e.target.value)}
                />
                <br />
                <label htmlFor="name">Name:</label>
                <input 
                    className = "login-form-input"
                    type = "text"
                    placeholder = "Name"
                    id = "name"
                    autoComplete = "off"
                    value = {name}
                    onChange = {(e) => setName(e.target.value)}
                />
                <br />
                <label htmlFor="password">Password:</label>
                <input
                    className = "login-form-input"
                    type = "password"
                    placeholder = "Password"
                    id = "password"
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)}
                    autoComplete = "current-password"
                />
                <input className="login-form-button" type="submit" value="Signup" />
            </form>
        </div>
    )

}

export default Signup