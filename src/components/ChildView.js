import React from "react";
import StorytimeTile from './StorytimeTile'

function ChildView({ child, childStorytimes, setCurrentStorytime }) {
    const { id, name, age, storytimes } = child

    const storytimeComponents = childStorytimes.map((childStorytime) => {
    if (childStorytime.child_id === id) {
        return(
        <StorytimeTile
            key = {childStorytime.id}
            storytime = {storytimes.find((storytime) => 
                storytime.id === childStorytime.storytime_id
            )}
            setCurrentStorytime = {setCurrentStorytime}
        />
        )
    }}
    )
    
    return (
        <div className="child-list">
            <div className="child-show">
                <h1>{name}</h1>
                <h2>Age: {age}</h2>
                <h3>Storytimes: </h3>
                <ul>{storytimeComponents}</ul>
            </div>
        </div>
    )

}

export default ChildView;