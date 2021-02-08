import React from "react";
import StorytimeTile from './StorytimeTile'

function ChildView({ child, childStorytimes }) {
    const { id, name, age, storytimes } = child

    const storytimeComponents = storytimes.map((storytime) =>
    <StorytimeTile
        key = {storytime.id}
        storytime = {storytime}
        />
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