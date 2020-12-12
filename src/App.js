import React from 'react';
import Main from "./components/MainPage";
import EventDetails from "./components/EventDetailsPage";
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route path="/event/:eventId" component={EventDetails} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;