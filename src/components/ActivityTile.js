import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';

function ActivityTile({ activity, setCurrentActivity, childActivity, onRemoveChildActivity, onEditedCAComment, childActivities }) {

    const { id, title, description, link, image, category } = activity
    const location = useLocation()
    const [newComment, setNewComment] = useState("")
    let reg = new RegExp('/storytimes/*')

    function handleClick() {
        setCurrentActivity(activity)
    } 

    function handleDelete() {
        fetch(`http://localhost:3000/child_activities/${childActivity.id}`, {
            method: "DELETE"
        })
        onRemoveChildActivity(childActivity.id)
    }

    function handleEdit(e) {
        e.preventDefault()
        fetch(`http://localhost:3000/child_activities/${childActivity.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ comment: newComment })
        })
        .then((r) => r.json())
        .then(editedComment => {
            onEditedCAComment(editedComment)
        })
    }

    return (
        <li className="activity-card">
            <div className="activity-tile-detail">
                <h1>{title}</h1>
                <h2>Category: {category.category} </h2>
                <Link to={`/activities/${id}`}>
                  <button onClick={handleClick} className="activity-button">Details</button>
                </Link>
                {(location.pathname === `/activities`) ? 
                null : 
                (reg.test(location.pathname)) ? null :
                <div>
                    <button onClick={handleDelete} value="delete" className="delete-button">Delete</button>
                    <form>
                        <label>Comment:</label>
                        <input
                            className="activity-comment"
                            type="text"
                            name="comment"
                            placeholder="Comment"
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                        />
                    </form>
                    <button className="add-comment" onClick={handleEdit} value="edit">Add Comment</button>
                </div>}
            </div>
        </li>
    )

}

export default ActivityTile;