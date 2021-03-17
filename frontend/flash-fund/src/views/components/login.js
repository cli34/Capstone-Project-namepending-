import React from "react"
import { Link, Redirect, useHistory } from "react-router-dom"
import { Form, Button, Spinner } from "react-bootstrap"
import { Formik } from "formik"
import * as yup from "yup"
import LandingNavbar from "./LandingNavbar"

import { loginUser, useAuthContext } from "../../context"

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(24, "Password must be between 6 and 24 characters long")
    .required("Required"),
})

const Login = () => {
  const history = useHistory()
  const authContext = useAuthContext()
  const userInfo = authContext.auth
  console.log(userInfo)

  const handleLogin = (creds, { setSubmitting }) => {
    const submit = async () => {
      loginUser(authContext.dispatch, creds)
      setTimeout(() => {
        console.log("login")
        setSubmitting(false)
        history.push("/home")
      }, 2000)
    }
    submit()
  }

  return (
    <>
      <LandingNavbar />
      <div className="Login">
        <Formik
          validationSchema={schema}
          onSubmit={handleLogin}
          initialValues={{
            email: "",
            password: "",
          }}
        >
          {({
            handleSubmit,
            handleChange,
            values,
            touched,
            errors,
            resetForm,
            isSubmitting,
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <h1>Login</h1>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  value={values.email || ""}
                  placeholder="Enter email"
                  name="email"
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                {errors.email && touched.email ? (
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                ) : null}
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  value={values.password || ""}
                  isInvalid={!!errors.password}
                />
                {errors.password && touched.password ? (
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                ) : null}
              </Form.Group>
              <Button variant="primary" type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <Spinner as="span" animation="border" />
                ) : (
                  "Submit"
                )}
              </Button>
              <div>
                <pre>{JSON.stringify(values, null, 2)}</pre>
              </div>
            </Form>
          )}
        </Formik>
        <pre>{JSON.stringify(userInfo, null, 2)}</pre>
      </div>
    </>
  )
}

export default Login
