import React from "react"
import { Redirect, Route } from "react-router-dom"
import { isAuthenticated } from '../../services/auth'
import Layout from "../layout"
function PrivateRoute({ component: Component, ...rest }) {
  // console.log(Component)
  // console.log({ isAuthenticated })
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Layout>
            <Component {...props} />
          </Layout>

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
