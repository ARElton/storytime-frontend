import React from "react";
import { NavLink, useHistory } from 'react-router-dom';
import Search from './Search';

function Header({ query, setQuery, setCurrentUser, currentUser }) {

    const history = useHistory()

    function logout() {
        localStorage.removeItem("token")
        setCurrentUser(null)
        history.push("/storytimes")
    }

    return (
        <header>
            <h1>storyTime</h1>
            <nav>
                <NavLink 
                    to="/storytimes"
                    className="button">
                    Storytimes
                </NavLink>
                <NavLink 
                    to="/activities"
                    className="button">
                    Activities
                </NavLink>
                <NavLink 
                    to="/profile"
                    className="button">
                    Profile
                </NavLink>
                { !currentUser ?
                <NavLink
                    exact
                    to="/register"
                    className="button">
                    Signup
                </NavLink>
                : null }
                { !currentUser ?
                <NavLink
                    exact
                    to="/login"
                    className="button">
                    Login
                </NavLink>
                :
                <button onClick={logout}>Logout</button>
                }
            </nav>
            <Search 
                query = {query} 
                setQuery = {setQuery}
            />
        </header>
    )

}

export default Header;
