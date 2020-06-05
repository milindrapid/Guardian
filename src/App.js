import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Tools from "./pages/Tools/Tools";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
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
