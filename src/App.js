/*
App.js for HackCville, Inc
By Camille Cooper and Mitch Gillin
January 2020

handles the routes and central organization of the checkin app for courses and events
*/

import React from "react";
import Welcome from "./Welcome/Welcome.js";
import SignIn from "./SignIn/SignIn.js";
import Activity from "./Activity/Activity.js";
import Confirmation from "./Confirmation/Confirmation.js"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/confirmation" component={Confirmation}/>
          <Route path="/sign-in" component={SignIn} />
          <Route path="/:recordNumber" component={Activity} />
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
