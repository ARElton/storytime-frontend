import React from "react";
import { Link } from 'react-router-dom';

function ActivityTile({ activity, setCurrentActivity, childActivity, onRemoveChildActivity }) {

    const { id, title, description, link, image, category } = activity

    function handleClick() {
        setCurrentActivity(activity)
    } 

    function handleDelete() {
        fetch(`http://localhost:3000/child_activities/${childActivity.id}`, {
            method: "DELETE"
        })
        onRemoveChildActivity(childActivity.id)
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
                <button onClick={handleDelete} value="delete" className="delete-button">Delete</button>
            </div>
        </li>
    )

}

export default ActivityTile;