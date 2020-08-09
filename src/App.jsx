import React from "react"
import Daily from "./components/daily"
import Home from "./components/home"
import Dashboard from "./components/dashboard"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import PrivateRoute from "./components/privateRoute"

export default function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route path="/daily">
          <Daily />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}
