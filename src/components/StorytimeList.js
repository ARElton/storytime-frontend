import React from "react";
import StorytimeTile from './StorytimeTile'

function StorytimeList({ storytimes, setCurrentStorytime }) {

    const storytimeComponents = storytimes.map((storytime) =>
    <StorytimeTile
        key = {storytime.id}
        storytime = {storytime}
        setCurrentStorytime = {setCurrentStorytime}
    />
    )

    return (
        <div className="storytime-list">
            <h1>Storytimes</h1>
            <ul className="storytime-card-list">{storytimeComponents}</ul>
        </div>
    )
}

export default StorytimeList;