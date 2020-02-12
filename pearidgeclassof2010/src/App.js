import React from "react";
import "./App.css";
//Routing imports
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home/home";

function App() {
  return (
    <div className="App">
      <Switch>
        {/* If the current URL is /about, this route is rendered
            while the rest are ignored */}
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
