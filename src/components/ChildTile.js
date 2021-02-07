import React from "react";
import { Link } from 'react-router-dom';

function ChildTile({ child, setCurrentChild }) {

    function handleClick() {
        setCurrentChild(child)
    }

    const { id, name, age } = child

    return (
        <li className="child-card">
            <div className="child-tile-detail">
                <h1>{name}</h1>
                <h2>Age: {age}</h2>
                <Link to={`/children/${id}`}>
                  <button onClick={handleClick} className="children-button">Details</button>
                </Link>
            </div>
        </li>
    )
}

export default ChildTile;