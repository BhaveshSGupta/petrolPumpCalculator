import React from "react"
import { Redirect, Route } from "react-router-dom"
import { isAuthenticated } from "../../utils"
function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          Component
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
