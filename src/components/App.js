import React, { useEffect, useState } from "react";
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import StorytimeList from './StorytimeList'
import ActivityList from './ActivityList'
import Profile from "./Profile";
import StorytimeView from "./StorytimeView";
import ActivityView from "./ActivityView";
import ChildView from "./ChildView"
import '../App.css';


function App() {

//--------------States--------------//

// Initial States
const [storytimes, setStorytimes] = useState([])
const [activities, setActivities] = useState([])
const [childStorytimes, setChildStorytimes] = useState([])
const [childActivities, setChildActivities] = useState([])
const [children, setChildren] = useState([])

// Filter States
const [currentStorytime, setCurrentStorytime] = useState(null)
const [currentActivity, setCurrentActivity] = useState(null)
const [query, setQuery] = useState("")

// Login States
const [currentUser, setCurrentUser] = useState(null)
const [currentChild, setCurrentChild] = useState(null)


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

// GET CHILDSTORYTIMES
useEffect(() => {
  fetch('http://localhost:3000/child_storytimes')
  .then((r)=>r.json())
  .then(allData => {
    setChildStorytimes(allData)
  })
}, [])

// GET CHILDACTIVITIES
useEffect(() => {
  fetch('http://localhost:3000/child_activities')
  .then((r)=>r.json())
  .then(allData => {
    setChildActivities(allData)
  })
}, [])

// GET CHILDREN
useEffect(() => {
  fetch('http://localhost:3000/children')
  .then((r)=>r.json())
  .then(allData => {
    setChildren(allData)
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

//--------------RenderOnDOM--------------//

function updateChildStorytime(childStorytimeObj) {
  setChildStorytimes([...childStorytimes, childStorytimeObj])
}

function updateChildActivity(childActivityObj) {
  setChildActivities([...childActivities, childActivityObj])
}

function updateChildren(childObj) {
  setChildren([...children, childObj])
}

function handleRemovChildStorytime(id) {
  const newChildStorytimes = childStorytimes.filter((childStorytime) => childStorytime.id !== id)
  setChildStorytimes(newChildStorytimes)
}

function handleRemoveChildActivity(id) {
  const newChildActivities = childActivities.filter((childActivity) => childActivity.id !== id)
  setChildActivities(newChildActivities)
}

//--------------Login/Logout--------------//

//---------FOR DEVELOPMENT---------//

  // auto-login
  useEffect(() => {
    fetch("http://localhost:3000/autologin")
      .then((r) => r.json())
      .then(setCurrentUser);
  }, []);

//---------FOR USE---------//

// Manual Login
function handleLogin() {
  fetch("http://localhost:3000/autologin")
    .then((r) => r.json())
    .then(setCurrentUser)
}

// Manual Logout
function handleLogout() {
  setCurrentUser(null)
}

//--------------Return--------------//

  return (
    <div className="big-container">
      <Header 
        query = {query} 
        setQuery = {setQuery} 
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
        <Route exact path='/profile'>
          <Profile 
            currentUser = {currentUser}
            setCurrentChild = {setCurrentChild}
            updateChildren = {updateChildren}
            children = {children}
            childStorytimes = {childStorytimes}
            childActivities = {childActivities}
          />
        </Route>
        <Route path='/storytimes/:id'>
          <StorytimeView 
            storytime = {currentStorytime}
            currentUser = {currentUser}
            updateChildStorytime = {updateChildStorytime}
            children = {children}
            setCurrentActivity = {setCurrentActivity}
          />
        </Route>
        <Route path='/activities/:id'>
          <ActivityView 
            activity = {currentActivity}
            currentUser = {currentUser}
            children = {children}
            updateChildActivity = {updateChildActivity}
          />
        </Route>
        <Route path='/children/:id'>
          <ChildView 
            child = {currentChild}
            childStorytimes = {childStorytimes}
            childActivities = {childActivities}
            setCurrentStorytime = {setCurrentStorytime}
            setCurrentActivity = {setCurrentActivity}
            storytimes = {storytimes}
            activities = {activities}
            onRemovChildStorytime = {handleRemovChildStorytime}
            onRemoveChildActivity = {handleRemoveChildActivity}
          />
        </Route>
        <div>
          <button onClick = {handleLogout}>Log out</button>
          <button onClick = {handleLogin}>Log in</button>
          {currentUser ? <h1>Welcome, {currentUser.name}</h1> : null}
        </div>
      </Switch>
    </div>   
  );
}

export default App;
