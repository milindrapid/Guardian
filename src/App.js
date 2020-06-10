import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Tools from "./pages/Tools/Tools";
// import your fontawesome library
import "./fontawesome";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/tools">
          <Tools />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
