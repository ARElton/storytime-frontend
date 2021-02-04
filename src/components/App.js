import React, { useEffect, useState } from "react";
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import StorytimeList from './StorytimeList'
import ActivityList from './ActivityList'
import '../App.css';

function App() {

//--------------States--------------//

// Initial States
const [storytimes, setStorytimes] = useState([])
const [activities, setActivities] = useState([])

// Filter States
const [currentStorytime, setCurrentStorytime] = useState(null)
const [currentActivity, setCurrentActivity] = useState(null)
const [query, setQuery] = useState("")


//------------Initial Fetches------------//

// GET STORYTIMES
useEffect(() => {
  fetch('http://localhost:3000/storytimes')
  .then((r)=>r.json())
  .then(allData => {
    setStorytimes(allData)
  })
}, [])

// GET ACTIVITIES
useEffect(() => {
  fetch('http://localhost:3000/activities')
  .then((r)=>r.json())
  .then(allData => {
    setActivities(allData)
  })
}, [])

//--------------Search--------------//

const displayedStorytimes = storytimes 
  .filter((storytime) => {
    return storytime.title.toLowerCase().includes(query.toLowerCase())
  })

const displayedActivities = activities 
  .filter((activity) => {
    return activity.title.toLowerCase().includes(query.toLowerCase())
  })

//--------------Return--------------//

  return (
    <div className="big-container">
      <Header 
        query={query} 
        setQuery={setQuery} 
      />
      <Switch>
        <Route exact path='/storytimes'>
          <StorytimeList 
            storytimes = {displayedStorytimes}
            setCurrentStorytime = {setCurrentStorytime}
          />
        </Route>
        <Route exact path='/activities'>
          <ActivityList 
            activities = {displayedActivities}
            setCurrentActivity = {setCurrentActivity}
          />
        </Route>
      </Switch>
    </div>   
  );
}

export default App;
