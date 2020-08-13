import React from "react"
import Daily from "./components/daily"
import Home from "./components/home"
import Dashboard from "./components/dashboard"
import Layout from "./components/layout"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import PrivateRoute from "./components/privateRoute"
import { isAuthenticated } from "./services/auth"
export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {isAuthenticated() ? (
            <Redirect to="/dashboard" />
          ) : (
            <Layout>
              <Home />
            </Layout>
          )}
        </Route>
        <PrivateRoute path="/dashboard" component={Dashboard}></PrivateRoute>
        <Route path="/daily">
          <Layout>
            <Daily />
          </Layout>
        </Route>
      </Switch>
    </Router>
  )
}
