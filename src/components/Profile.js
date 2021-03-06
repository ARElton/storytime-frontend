import React, { useState } from "react";
import ChildTile from './ChildTile';

function Profile({ currentUser, setCurrentChild, childStorytimes, childActivities, updateChildren, children }) {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")

    const userChildren = children.filter((child) => {
       return child.user_id === currentUser.id
    })

    const childrenComponents = userChildren.map((child) =>
    <ChildTile
        key = {child.id}
        child = {child}
        setCurrentChild = {setCurrentChild}
        childStorytimes = {childStorytimes}
        childActivities = {childActivities}
        />
    )

    function handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:3000/children", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_id: currentUser.id,
                name: name,
                age: parseInt(age)
            }),
        })
        .then(r => r.json())
        .then(newObj => updateChildren(newObj))
        setName('')
        setAge('')
    }

    return (
        <div className="child-list">
            <h1>{currentUser.name}'s Children</h1>
            <ul className="child-card-list">{childrenComponents}</ul>
            <form className="add-child-form" onSubmit={handleSubmit}>
                <h1>Add A Child:</h1>
                <input 
                    type = "text"
                    name = "name"
                    placeholder = "Child name"
                    value = {name}
                    onChange = {(e) => setName(e.target.value)}
                />
                <input 
                    type = "text"
                    name = "age"
                    placeholder = "Child age"
                    value = {age}
                    onChange = {(e) => setAge(e.target.value)}
                />
                <br />
                 <button type="submit">Add Child</button>
            </form>
        </div>
    )
}

export default Profile;