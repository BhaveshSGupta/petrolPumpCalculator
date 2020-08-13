import React, { useState } from "react"
import { Formik } from "formik"
import { Redirect } from "react-router-dom"
import { Box, Button, FormField, TextInput } from "grommet"
const Login = props => {
  const [redirect, setredirect] = useState(false)
  const ApiUrl = "/api/users"
  const HandleLogin = async ({ email, password }) => {
    try {
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }
      fetch(ApiUrl, requestOptions).then(async response => {
        if (response.status === 200) {
          window.localStorage.setItem(
            "loggedIn",
            JSON.stringify({
              isLoggedIn: true,
            })
          )
          const data = await response.json()
          setredirect(true)
          return { body: data, status: response.status }
        }
        if (response.status === 200) {
          return { body: "hello", status: response.status }
        }
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
          validate={values => {
            const errors = {}
            if (!values.email) {
              errors.email = "required"
            }
            if (!values.password) {
              errors.password = "required"
            }
            return errors
          }}
          onSubmit={async values => {
            HandleLogin(values)
          }}
        >
          {({
            values,
            errors,
            handleChange,
            handleSubmit,
            setFieldValue,
            handleBlur,
            touched,
          }) => (
            <form
              onSubmit={event => {
                event.preventDefault()
                handleSubmit()
              }}
            >
              <FormField
                label="Email"
                error={!!touched.email && errors.email}
                required
              >
                <TextInput
                  type="email"
                  name="email"
                  value={values.email || ""}
                  onChange={value => {
                    handleChange(value)
                    console.log(touched)
                  }}
                  onBlur={handleBlur}
                />
              </FormField>
              <FormField
                label="Password"
                error={!!touched.password && errors.password}
                required
              >
                <TextInput
                  type="password"
                  name="password"
                  onBlur={handleBlur}
                  value={values.password || ""}
                  onChange={value => {
                    handleChange(value)
                    console.log(touched)
                  }}
                />
              </FormField>
              <Box
                tag="footer"
                margin={{ top: "medium" }}
                direction="row"
                justify="between"
              >
                <Button label="Cancel" />
                <Button type="submit" primary label="Create" />
              </Box>
            </form>
          )}
        </Formik>
      )}
    </div>
  )
}

export default Login
// TODO:Error Handling for incorrect input