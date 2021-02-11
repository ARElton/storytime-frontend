import React, { useEffect, useState } from "react";
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import StorytimeList from './StorytimeList'
import ActivityList from './ActivityList'
import Profile from "./Profile";
import StorytimeView from "./StorytimeView";
import ActivityView from "./ActivityView";
import ChildView from "./ChildView"
import Login from "./Login"
import LogoutButton from "./LogoutButton"
import '../App.css';


function App() {

//--------------States--------------//

// Initial States
const [storytimes, setStorytimes] = useState([])
const [activities, setActivities] = useState([])
const [childStorytimes, setChildStorytimes] = useState([])
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

function updateChildren(childObj) {
  setChildren([...children, childObj])
}

//--------------Login/Logout--------------//

//---------FOR DEVELOPMENT---------//

  // auto-login
  // useEffect(() => {
  //   fetch("http://localhost:3000/autologin")
  //     .then((r) => r.json())
  //     .then(setCurrentUser);
  // }, []);

//---------FOR USE---------//

// Manual Login
// function handleLogin() {
//   fetch("http://localhost:3000/autologin")
//     .then((r) => r.json())
//     .then(setCurrentUser)
// }

// Manual Logout
// function handleLogout() {
//   setCurrentUser(null)
// }

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
          />
        </Route>
        <Route path='/children/:id'>
          <ChildView 
            child = {currentChild}
            childStorytimes = {childStorytimes}
            setCurrentStorytime = {setCurrentStorytime}
            storytimes = {storytimes}
          />
        </Route>
        <Route exact path='/login'>
          <Login 
            setCurrentUser = {setCurrentUser}
          />
          <LogoutButton
            setCurrentUser = {setCurrentUser}
          />
        </Route>
        {/* <div>
          <button onClick = {handleLogout}>Log out</button>
          <button onClick = {handleLogin}>Log in</button>
          {currentUser ? <h1>Welcome, {currentUser.name}</h1> : null}
        </div> */}
      </Switch>
    </div>   
  );
}

export default App;
