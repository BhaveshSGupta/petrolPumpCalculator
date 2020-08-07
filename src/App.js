import React from "react";
import Daily from "./components/daily";
import Home from "./components/home"
import Dashboard from "./components/dashboard"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <NavLink to="/dashboard" activeClassName="active">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/daily" activeClassName="active">Daily</NavLink>
          </li>
        </ul>

        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/daily">
            <Daily />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}