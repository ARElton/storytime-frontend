import React, { useState } from "react";
import { useHistory, Link } from 'react-router-dom';
import ActivityTile from "./ActivityTile"


function StorytimeView({ storytime, currentUser, updateChildStorytime }) {
    const { id, title, age, genre, time, activities } = storytime
    const [child, setChild] = useState("")

    const activityComponents = activities.map((activity) =>
    <ActivityTile
        key = {activity.id}
        activity = {activity}
        />
    )

    function handleSubmit() {
        const newChildStorytimeObj = {
            child_id: child.id,
            storytime_id: id,
            comment: ""
        }
        fetch('http://localhost:3000/childstorytimes', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newChildStorytimeObj),
        })
        .then(r => r.json())
        .then(console.log(newChildStorytimeObj))
    }

    return (
        <div className="storytime-list">
            <div className="storytime-show">
                <h1>{title}</h1>
                <h3>Age: {age}</h3>
                <h3>Genre: {genre}</h3>
                <h3>Minimum Time: {time} minutes</h3>
                <form className="add-childstorytime-form" onSubmit = {handleSubmit}>
                    <h3>Add Storytime:</h3>
                    <div className="child-div">
                        <label htmlFor="children">Choose a Child:</label>
                        <select 
                            name = "children"
                            value = {child}
                            onChange = {(e) => setChild(e.target.value)}>
                            {currentUser.children.map((child) =>{ 
                                return <option key={child.id} value={child.id}>{child.name}</option>})}
                        </select>
                        <button type="submit">Add Storytime</button>
                    </div>
                </form>
                <h2>Activities:</h2>
                <ul className="activity-card-list">{activityComponents}</ul>
            </div>
        </div>
    )
}

export default StorytimeView