import React from "react"
import { Link } from "react-router-dom"
import { Form, Col, Button, InputGroup, Card, Spinner } from "react-bootstrap"
import { Container } from "react-bootstrap"
import "../../assets/css/login.css"
import LandingNavbar from "./LandingNavbar"
import * as yup from "yup"
import { Field, Formik } from "formik"
import { loginUser, useAuthContext } from "../../context"
import { Redirect, useHistory } from "react-router-dom"

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(24, "Password must be between 6 and 24 characters long")
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Passwords must match"),
})
const Register = () => {
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
        <h1>Register</h1>
        <Formik
          validationSchema={schema}
          onSubmit={handleLogin}
          initialValues={{
            email: "",
            password: "",
            confirmPassword: "",
          }}
        >
          {({
            handleSubmit,
            handleChange,
            values,
            touched,
            errors,
            isSubmitting,
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  value={values.email}
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
                  isInvalid={!!errors.password}
                />
                {errors.password && touched.password ? (
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                ) : null}
              </Form.Group>
              <Form.Group controlId="formBasicPasswordConfirm">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  onChange={handleChange}
                  isInvalid={!!errors.confirmPassword}
                />
                {errors.confirmPassword && touched.confirmPassword ? (
                  <Form.Control.Feedback type="invalid">
                    {errors.confirmPassword}
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
      </div>
    </>
  )
}

export default Register
