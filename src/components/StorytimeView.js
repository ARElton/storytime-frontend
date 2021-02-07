import React from "react";
import { useHistory, Link } from 'react-router-dom';
import ActivityTile from "./ActivityTile"


function StorytimeView({ storytime }) {
    const { id, title, age, genre, time, activities } = storytime

    const activityComponents = activities.map((activity) =>
    <ActivityTile
        key = {activity.id}
        activity = {activity}
        />
    )

    return (
        <div classname="storytime-list">
            <div className="storytime-show">
                <h1>{title}</h1>
                <h3>Age: {age}</h3>
                <h3>Genre: {genre}</h3>
                <h3>Minimum Time: {time} minutes</h3>
                <h2>Activities:</h2>
                <ul className="activity-card-list">{activityComponents}</ul>
            </div>
        </div>
    )
}

export default StorytimeView