import React from "react";
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from "./pages/Home";
import { SignInPage } from "./pages/signin";

export function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SignInPage} exact />
      </Switch>
    </Router>
  );
}
