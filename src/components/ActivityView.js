import React from "react";

function ActivityView({ activity }) {
    const { id, title, description, link, image, category } = activity

    return (
        <div className="activity-list">
            <div className="activity-show">
                <h1>{title}</h1>
                <h2>Category: {category.category}</h2>
                <p>{description}</p>
                <p>Resource: {link}</p>
            </div>
        </div>
    )

}

export default ActivityView;