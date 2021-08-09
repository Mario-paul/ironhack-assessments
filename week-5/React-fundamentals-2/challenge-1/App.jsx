import React from "react";
import {
  BrowserRouter as Router, 
  Redirect, 
  Route, 
  Switch
} from "react-router-dom";

import "./App.css";

import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ProductPage from "./components/ProductPage";
import ErrorPage from "./components/ErrorPage";

// Do not modify the above code.


const App = () =>
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />      
      {/*Task 1.1: create Route `/about` for `AboutPage` component */}
      <Route exact path="/about" component={AboutPage} />   
      {/*Task 1.2: create Route `/product/:type` for `ProductPage` component */}
      <Route exact path="/product/:type" component={ProductPage} />
      {/*Task 1.3: create Route without `path` that renders `ErrorPage` on a bad URL `/` */}
      <Route component={ErrorPage} />      
    </Switch>
  </Router>
;

export default App;

