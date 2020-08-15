import React from "react"
import { Redirect, Route } from "react-router-dom"
import { isAuthenticated } from "../../services/auth"
function PrivateRoute({ component: Component}) {
  // console.log(Component)
  // console.log({ isAuthenticated })
  return (
    <Route
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
