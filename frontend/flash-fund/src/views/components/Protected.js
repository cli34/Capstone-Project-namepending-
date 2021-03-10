import React from "react"
import { Redirect, Route } from "react-router"

const ProtectedRoute = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth) {
          return <Component />
        } else {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          )
        }
      }}
    />
  )
}

export default ProtectedRoute
