import React from "react"
import { Formik } from "formik"
import { useHistory } from "react-router-dom"
import { Box, Button, FormField, TextInput } from "grommet"
const Login = () => {
  let history = useHistory()
  const ApiUrl = "/api/users/login"
  const HandleLogin = async ({ email, password }) => {
    try {
      const requestOptions = {
        method: "POST",
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
          history.push("/dashboard")
          return { body: data, status: response.status }
        }
        if (response.status === 200) {
          return { body: "hello", status: response.status }
        }
      })
    } catch (e) {}
  }
  return (
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
              onChange={handleChange}
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
              onChange={handleChange}
            />
          </FormField>
          <Box
            tag="footer"
            margin={{ top: "medium" }}
            direction="row"
            justify="between"
          >
            <Button type="submit" primary label="Login" />
          </Box>
        </form>
      )}
    </Formik>
  )
}

export default Login
// TODO:Error Handling for incorrect input
