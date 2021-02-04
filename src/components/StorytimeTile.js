import React from "react";
import { Link } from 'react-router-dom';

function StorytimeTile({ storytime, setCurrentStorytime }) {

    const { id, title, age, genre, time } = storytime

    function handleClick() {
        setCurrentStorytime(storytime)
    }

    return (
        <li className="storytime-card">
            <div className="storytime-tile-detail">
                <h1>{title}</h1>
                <h2>Target Age: {age}</h2>
                <p>Genre: {genre}</p>
                <p>Average Minimum Time: {time} minutes</p>
                <Link to={`/storytimes/${id}`}>
                  <button onClick={handleClick} className="storytime-button">Details</button>
                </Link>
            </div>
        </li>
    )
}

export default StorytimeTile;
