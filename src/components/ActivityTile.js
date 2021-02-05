import React from "react";
import { Link } from 'react-router-dom';

function ActivityTile({ activity, setCurrentActivity }) {

    const { id, title, description, link, image, category } = activity

    function handleClick() {
        setCurrentActivity(activity)
    } 

    return (
        <li className="activity-card">
            <div className="activity-tile-detail">
                <h1>{title}</h1>
                <h2>Category: {category.category} </h2>
                <p>Description: {description}</p>
                <p>Resource: {link}</p>
                <img src={image} alt={title} />
                <Link to={`/activities/${id}`}>
                  <button onClick={handleClick} className="activity-button">Details</button>
                </Link>
            </div>
        </li>
    )

}

export default ActivityTile;