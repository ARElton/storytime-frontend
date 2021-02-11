import React from "react";

function LogoutButton({ setCurrentUser }) {

    function logout() {
        localStorage.removeItem("token")
        setCurrentUser(null)
    }

    return <button onClick={logout}>Logout</button>
}

export default LogoutButton;