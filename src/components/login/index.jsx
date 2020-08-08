import React from "react"
import { Formik, Field, Form, ErrorMessage } from "formik"
import HandleLogin from "../../services/handlelogin"
const Login = () => {
  return (
    //
    <div>
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
    </div>
  )
}

export default Login
