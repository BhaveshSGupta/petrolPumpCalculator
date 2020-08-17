import React, { Suspense, lazy } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import PrivateRoute from "./components/privateRoute"
import { isAuthenticated } from "./utils"
const Layout = lazy(() => import("./components/layout"))
const Daily = lazy(() => import("./components/daily"))
const Dashboard = lazy(() => import("./components/dashboard"))
const Home = lazy(() => import("./components/home"))
const dashboard = (
  <Suspense fallback={<></>}>
    <Layout>
      <Dashboard />
    </Layout>
  </Suspense>
)
export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {isAuthenticated() ? (
            <Redirect to="/dashboard" />
          ) : (
            <Suspense fallback={<></>}>
              <Layout>
                <Home />
              </Layout>
            </Suspense>
          )}
        </Route>
        <PrivateRoute path="/dashboard" component={dashboard}></PrivateRoute>
        <Route path="/daily">
          <Suspense fallback={<></>}>
            <Layout>
              <Daily />
            </Layout>
          </Suspense>
        </Route>
      </Switch>
    </Router>
  )
}
