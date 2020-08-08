import React from "react"
import { Redirect, Route } from "react-router-dom"
const fakeAuth = {}
fakeAuth.isAuthenticated = false

function PrivateRoute({ component: Component, ...rest }) {
  const getUser = () => (JSON.parse(window.localStorage.loggedIn))
  const auth = getUser()
  // console.log({ auth })
  return (
    <Route
      {...rest}
      render={props =>
        auth.isLoggedIn ? (
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
