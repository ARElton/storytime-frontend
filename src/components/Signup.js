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
               <form className="signup-form" onSubmit={handleSubmit}>
                <h1>Signup</h1>
                <label htmlFor="username">Username</label>
                <input 
                    type = "text"
                    id = "username"
                    autoComplete = "off"
                    value = {username}
                    onChange = {(e) => setUsername(e.target.value)}
                />
                <label htmlFor="name">Name</label>
                <input 
                    type = "text"
                    id = "name"
                    autoComplete = "off"
                    value = {name}
                    onChange = {(e) => setName(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    type = "password"
                    id = "password"
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)}
                    autoComplete = "current-password"
                />
                <input type="submit" value="Signup" />
            </form>
        </div>
    )

}

export default Signup