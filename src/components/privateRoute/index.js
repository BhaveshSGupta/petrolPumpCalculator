import React from "react"
import { Redirect, Route } from "react-router-dom"
import { isAuthenticated } from '../../services/auth'

function PrivateRoute({ component: Component, ...rest }) {

  // console.log({ isAuthenticated })
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
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
