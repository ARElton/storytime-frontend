import React from "react";
import { NavLink } from 'react-router-dom';
import Search from './Search';
import Categories from './Categories';


function Header() {

    return (
        <header>
            <nav>
                <NavLink
                    exact
                    to="/"
                    className="button">
                    Home
                </NavLink>
                <button
                    className="button">
                    Categories
                </button>
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
            
            />
        </header>
    )

}

export default Header;
