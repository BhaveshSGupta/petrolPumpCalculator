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
import Errorpage from "./components/errorpage"
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
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
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
        <PrivateRoute path="/dashboard" component={dashboard} exact />
        <Route path="/daily" exact>
          <Layout>
            <Suspense fallback={<div>Loading..</div>}>
              <Daily />
            </Suspense>
          </Layout>
        </Route>
        <Route>
          <Layout>
            <Errorpage />
          </Layout>
        </Route>
      </Switch>
    </Router>
  )
}
App.whyDidYouRender = true
export default App
