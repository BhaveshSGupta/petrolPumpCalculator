import React from "react"
import { Redirect, Route } from "react-router-dom"
const fakeAuth = {}
fakeAuth.isAuthenticated = false
function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  )
}
export default PrivateRoute
