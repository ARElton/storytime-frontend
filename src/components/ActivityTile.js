import React from "react";
import { Link } from 'react-router-dom';

function ActivityTile({ activity, setCurrentActivity }) {

    const { id, title, description, link, image } = activity

    function handleClick() {
        setCurrentActivity(activity)
    } 

    return (
        <li className="activity-card">
            <div className="activity-tile-detail">
                <h1>{title}</h1>
                <h2>Description: {description}</h2>
                <p>Link: {link}</p>
                <img src={image} alt={title} />
                <Link to={`/activities/${id}`}>
                  <button onClick={handleClick} className="activity-button">Details</button>
                </Link>
            </div>
        </li>
    )

}

export default ActivityTile;