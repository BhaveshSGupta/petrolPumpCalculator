import React, { useState, useEffect } from "react"
import { Formik, Field, Form, ErrorMessage } from "formik"
import { Redirect } from "react-router-dom"
// import HandleLogin from "../../services/handlelogin"
const Login = props => {
  useEffect(() => {
    return () => {}
  }, [])
  const [redirect, setredirect] = useState(false)
  const ApiUrl = "/api/users"
  const HandleLogin = async ({ email, password }) => {
    // const history = useHistory();
    try {
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }
      fetch(ApiUrl, requestOptions)
        .then(async response => {
          if (response.status === 200) {
            window.localStorage.setItem(
              "loggedIn",
              JSON.stringify({
                isLoggedIn: true,
              })
            )
            return { body: await response.json(), status: response.status }
          } else {
            return { body: "hello", status: response.status }
          }
        })
        .then(() => {
          setredirect(true)
        })
    } catch (e) {}
  }
  return (
    <div>
      {redirect && (
        <Redirect
          to={{
            pathname: "/dashboard",
            state: { from: props.location },
          }}
        />
      )}
      {!redirect && (
        <Formik
          initialValues={{
            password: "",
            email: "",
          }}
          onSubmit={async values => {
            HandleLogin(values)
          }}
        >
          <Form>
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
            />
            <ErrorMessage name="email" />
            <label htmlFor="password">password</label>
            <Field name="password" type="password" />
            <ErrorMessage name="password" />
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      )}{" "}
    </div>
  )
}

export default Login
