import React, { useState } from "react";
import { useLocation } from 'react-router-dom';

function ActivityView({ activity, currentUser, children, updateChildActivity }) {
    const { id, title, description, link, image, category } = activity
    const [ child, setChild ] = useState("")
    const location = useLocation()

    const userChildren = children.filter((child) => {
        return child.user_id === currentUser.id
    })

    function handleSubmit(e) {
        e.preventDefault()
        const newChildActivityObj = {
            child_id: parseInt(child),
            activity_id: id,
            comment: ""
        }
        fetch('http://localhost:3000/child_activities', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newChildActivityObj)
        })
        .then(r => r.json())
        .then(newObj => updateChildActivity(newObj))
    }

    return (
        <div className="activity-list">
            <div className="activity-show">
                <h1>{title}</h1>
                <h2>Category: {category.category}</h2>
                <p>{description}</p>
                <p>Resource: {link}</p>
                <form className="add-childactivity-form" onSubmit = {handleSubmit}>
                    <h3>Add Activity:</h3>
                    <div className="child-div">
                        <label htmlFor="children">Choose a Child:</label>
                        <select
                            name = "child"
                            value = {child}
                            onChange = {(e) => setChild(e.target.value)}>
                            {userChildren.map((child) => {
                                return <option key={child.id} value={child.id}>{child.name}</option>})}
                        </select>
                        <button type="submit">Add Activity</button>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default ActivityView;