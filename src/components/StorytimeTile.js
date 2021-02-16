import React, { useState } from "react";
import { Link, useLocation, useHistory } from 'react-router-dom';

function StorytimeTile({ storytime, setCurrentStorytime, childStorytime, onRemovChildStorytime, onEditedCSComment }) {

    const { id, title, age, genre, time } = storytime
    const location = useLocation()
    const history = useHistory()
    const [newComment, setNewComment] = useState("")

    function handleClick() {
        setCurrentStorytime(storytime)
    }

    function handleDelete() {
        fetch(`http://localhost:3000/child_storytimes/${childStorytime.id}`, {
            method: "DELETE"
        })
        onRemovChildStorytime(childStorytime.id)
        history.push(`/child/${childStorytime.child_id}`)
    }
    
    function handleEdit(e) {
        e.preventDefault()
        fetch(`http://localhost:3000/child_storytimes/${childStorytime.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ comment: newComment })
        })
        .then((r) => r.json())
        .then(editedComment => {
            onEditedCSComment(editedComment)
        })
    }

    return (
        <li className="storytime-card">
            <div className="storytime-tile-detail">
                <h1>{title}</h1>
                <h2>Target Age: {age}</h2>
                <p>Genre: {genre}</p>
                <p>Average Minimum Time: {time} minutes</p>
                <Link to={`/storytimes/${id}`}>
                  <button onClick={handleClick} className="storytime-button">Details</button>
                </Link>
                {(location.pathname === `/storytimes`) ? 
                null : 
                <div>
                <button onClick={handleDelete} value="delete" className="delete-button">Delete</button>
                {childStorytime.comment === "" ?
                    <>
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
                    <button className="add-comment" onClick={handleEdit} value="edit">Add Comment</button></> : null}
                </div>}
            </div>
        </li>
    )
}

export default StorytimeTile;
