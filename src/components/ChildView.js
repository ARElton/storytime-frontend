import React from "react";
import ActivityTile from "./ActivityTile";
import StorytimeTile from './StorytimeTile'

function ChildView({ child, childStorytimes, childActivities, setCurrentStorytime, setCurrentActivity, storytimes, activities, onRemovChildStorytime, onRemoveChildActivity, onEditedCAComment, onEditedCSComment, childActivity }) {
    const { id, name, age  } = child
    
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
            onEditedCSComment = {onEditedCSComment}
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
                    onEditedCAComment = {onEditedCAComment}
                />
            )
        }
    })

    return (
        <div className="child-list">
            <div className="child-show">
                <h1>{name}</h1>
                <h1>Age: {age}</h1>
                <h1>Storytimes: </h1>
                <ul>{storytimeComponents}</ul>
                <h1>Activities:</h1>
                <ul>{activityComponents}</ul>
            </div>
        </div>
    )

}

export default ChildView;