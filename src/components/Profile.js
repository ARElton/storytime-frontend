import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import ChildTile from './ChildTile';

function Profile({ currentUser, setCurrentChild, childStorytimes }) {

    let history = useHistory()
    useEffect(() => {
        if (!currentUser) {
            history.push("/")
        }
    }, [])

    const children = currentUser.children 

    const childrenComponents = children.map((child) =>
    <ChildTile
        key = {child.id}
        child = {child}
        setCurrentChild = {setCurrentChild}
        childStorytimes = {childStorytimes}
        />
    )

    return (
        <div className="child-list">
            <h1>{currentUser.name}'s Children</h1>
            <ul className="child-card-list">{childrenComponents}</ul>
        </div>
    )
}

export default Profile;