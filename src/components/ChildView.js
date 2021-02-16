import React, { Fragment } from "react";
import ActivityTile from "./ActivityTile";
import StorytimeTile from './StorytimeTile'
import StorytimeView from "./StorytimeView";

function ChildView({ child, childStorytimes, childActivities, setCurrentStorytime, setCurrentActivity, storytimes, activities, onRemovChildStorytime, onRemoveChildActivity }) {
    const { id, name, age  } = child
    console.log(childStorytimes)
    console.log(childActivities)

    const storytimeComponents = childStorytimes.map((childStorytime) => {
    if (childStorytime.child_id === id) {
        return(
        <StorytimeTile
            key = {childStorytime.id}
            storytime = {storytimes.find((storytime) => 
                storytime.id === childStorytime.storytime_id
            )}
            setCurrentStorytime = {setCurrentStorytime}
            childStorytime = {childStorytime}
            onRemovChildStorytime = {onRemovChildStorytime}
        />
        )
    }}
    )

    const activityComponents = childActivities.map((childActivity) => {
        if (childActivity.child_id === id) {
            return(
                <ActivityTile
                    key = {childActivity.id}
                    activity = {activities.find((activity) => 
                        activity.id === childActivity.activity_id    
                    )}
                    setCurrentActivity = {setCurrentActivity}
                    childActivity = {childActivity}
                    onRemoveChildActivity = {onRemoveChildActivity}
                />
            )
        }
    })

    // const commentComponents = childStorytimes.map((childStorytime) => {
    //     if (childStorytime.child_id === id) {
    //         return(
    //             <li>{childStorytime.comment}</li>
    //         )
    //     }
    // })
    
    return (
        <div className="child-list">
            <div className="child-show">
                <h1>{name}</h1>
                <h2>Age: {age}</h2>
                <h3>Storytimes: </h3>
                <ul>{storytimeComponents}</ul>
                <h3>Activities:</h3>
                <ul>{activityComponents}</ul>
                {/* <h3>Comments:</h3>
                <ul>{commentComponents}</ul> */}
            </div>
        </div>
    )

}

export default ChildView;