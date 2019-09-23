import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

import Login from "./pages/Login"
import Main from "./pages/Main"

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path = "/" component = {Login} />
          <Route path = "/main" component = {Main} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;