import React, { Suspense, lazy } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import PrivateRoute from "./components/privateRoute"
import { isAuthenticated } from "./utils"
import Layout from "./components/layout"
import "./App.css"
const Daily = lazy(() => import("./components/daily"))
const Dashboard = lazy(() => import("./components/dashboard"))
const Home = lazy(() => import("./components/home"))
const dashboard = (
  <Layout>
    <Suspense fallback={<div>Loading..</div>}>
      <Dashboard />
    </Suspense>
  </Layout>
)
export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {isAuthenticated() ? (
            <Redirect to="/dashboard" />
          ) : (
            <Layout>
              <Suspense fallback={<div>Loading..</div>}>
                <Home />
              </Suspense>
            </Layout>
          )}
        </Route>
        <PrivateRoute path="/dashboard" component={dashboard}></PrivateRoute>
        <Route path="/daily">
          <Layout>
            <Suspense fallback={<div>Loading..</div>}>
              <Daily />
            </Suspense>
          </Layout>
        </Route>
      </Switch>
    </Router>
  )
}
