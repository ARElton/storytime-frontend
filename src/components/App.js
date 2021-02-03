import React, { useEffect, useState } from "react";
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import StorytimeList from './StorytimeList'
import '../App.css';

function App() {
  return (
    <div className="big-container">
      <Header />
      <Switch>
        <Route exact path='/'>
          <StorytimeList />
        </Route>
      </Switch>
    </div>   
  );
}

export default App;
