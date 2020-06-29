import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Resource from './pages/resourcecenter/ResourceCenter'
import Tools from "./pages/Tools/Tools";
import Sidebar from "./components/Sidebar/Sidebar";
import { sidebar } from "./constants/sidebar";
import { formatToArrayItems } from "./utils/helper";
import "./App.css";
// import your fontawesome library
import "./fontawesome";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar items={formatToArrayItems(sidebar)} />
        <div className="app-content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/tools">
              <Tools />
            </Route>
            <Route path="/resource">
              <Resource />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
