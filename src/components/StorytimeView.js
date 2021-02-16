import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import ActivityTile from "./ActivityTile"


function StorytimeView({ storytime, currentUser, updateChildStorytime, children, setCurrentActivity }) {
    const { id, title, age, genre, time, activities } = storytime
    const [ child, setChild ] = useState("")
    const location = useLocation()

    const activityComponents = activities.map((activity) =>
    <ActivityTile
        key = {activity.id}
        activity = {activity}
        setCurrentActivity = {setCurrentActivity}
        />
    )

    const userChildren = children.filter((child) => {
        return child.user_id === currentUser.id
     })

    function handleSubmit(e) {
        e.preventDefault()
        const newChildStorytimeObj = {
            child_id: parseInt(child),
            storytime_id: id,
            comment: ""
        }
        fetch('http://localhost:3000/child_storytimes', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newChildStorytimeObj)
        })
        .then(r => r.json())
        .then(newObj => updateChildStorytime(newObj))
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
                            {userChildren.map((child) => { 
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