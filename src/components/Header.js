import React from "react";
import { NavLink } from 'react-router-dom';
import Search from './Search';
import Categories from './Categories';

function Header({ query, setQuery }) {

    return (
        <header>
            <h1>storyTime</h1>
            <nav>
                <NavLink
                    exact
                    to="/login"
                    className="button">
                    Login
                </NavLink>
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
            </nav>
            <Search 
                query = {query} 
                setQuery = {setQuery}
            />
        </header>
    )

}

export default Header;
