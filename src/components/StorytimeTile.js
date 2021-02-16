import React from "react";
import { Link, useLocation, useHistory } from 'react-router-dom';

function StorytimeTile({ storytime, setCurrentStorytime, childStorytime, onRemovChildStorytime }) {

    const { id, title, age, genre, time } = storytime
    const location = useLocation()
    const history = useHistory()

    function handleClick() {
        setCurrentStorytime(storytime)
    }

    function handleDelete() {
        fetch(`http://localhost:3000/child_storytimes/${childStorytime.id}`, {
            method: "DELETE"
        })
        onRemovChildStorytime(childStorytime.id)
        history.push(`/child/${childStorytime.child_id}`)
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
                <button onClick={handleDelete} value="delete" className="delete-button">Delete</button>
            </div>
        </li>
    )
}

export default StorytimeTile;
