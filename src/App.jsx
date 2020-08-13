import React, { useState } from "react"
import Daily from "./components/daily"
import Home from "./components/home"
import Dashboard from "./components/dashboard"
import {
  Box,
  Button,
  Heading,
  Grommet,
  Collapsible,
  Layer,
  ResponsiveContext,
} from "grommet"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import PrivateRoute from "./components/privateRoute"
import { isAuthenticated } from "./services/auth"
import { Notification, FormClose } from "grommet-icons"
const theme = {
  global: {
    colors: {
      brand: "#228BE6",
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
}
const AppBar = props => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
)
export default function App() {
  const [showSidebar, setShowSidebar] = useState(false)
  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {size => (
          <Box fill>
            <AppBar>
              <Heading level="3" margin="none">
                My App
              </Heading>
              <Button
                icon={<Notification />}
                onClick={() => setShowSidebar(!showSidebar)}
              />
            </AppBar>
            <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
              {!showSidebar || size !== "small" ? (
                <Collapsible
                  direction="horizontal"
                  open={showSidebar && isAuthenticated()}
                >
                  <Box
                    width="medium"
                    background="light-2"
                    flex
                    elevation="small"
                    align="center"
                    justify="center"
                  >
                    sidebar
                  </Box>
                </Collapsible>
              ) : (
                <Layer>
                  <Box
                    background="light-2"
                    tag="header"
                    justify="end"
                    align="center"
                    direction="row"
                  >
                    <Button
                      icon={<FormClose />}
                      onClick={() => setShowSidebar(false)}
                    />
                  </Box>
                  <Box fill background="light2" align="center" justify="center">
                    sidebar
                  </Box>
                </Layer>
              )}

              <Box flex align="left" justify="top">
                <Router>
                  <Switch>
                    <Route exact path="/">
                      {isAuthenticated() ? (
                        <Redirect to="/dashboard" />
                      ) : (
                        <Home />
                      )}
                    </Route>
                    <PrivateRoute path="/dashboard" component={Dashboard} />
                    <Route path="/daily">
                      <Daily />
                    </Route>
                  </Switch>
                </Router>
              </Box>
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  )
}
