import React from "react";
import ActivityTile from "./ActivityTile"

function ActivityList({ activities, setCurrentActivity }) {
    
    const activityComponents = activities.map((activity) =>
    <ActivityTile
        key = {activity.id}
        activity = {activity}
        setCurrentActivity = {setCurrentActivity}
    />
    )

    return (
        <div className="activity-list">
            <h1>Activities</h1>
            <ul className="activity-card-list">{activityComponents}</ul>
        </div>
    )

}

export default ActivityList;