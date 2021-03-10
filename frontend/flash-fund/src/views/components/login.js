import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"

import { loginUser, useAuthContext } from "../../context"

const Login = () => {
  const [registerState, setRegisterState] = useState({
    email: "",
    password: "",
  })

  const { dispatch } = useAuthContext()
  const userInfo = useAuthContext().auth
  console.log(userInfo)
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          console.log(registerState)
          const payload = {
            ...registerState,
            token: "1234",
            userType: "student",
          }
          loginUser(dispatch, payload)
          console.log(userInfo)
        }}
      >
        <label>
          <p>Email</p>
          <input
            type="text"
            placeholder="email"
            onChange={(e) => {
              const email = e.target.value
              setRegisterState({ ...registerState, email })
            }}
          ></input>
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            placeholder="password"
            onChange={(e) => {
              const password = e.target.value
              setRegisterState({ ...registerState, password })
            }}
          ></input>
        </label>
        <br />
        <button type="submit">Log In</button>
        <Link to={"/"}>landing</Link>
      </form>
    </div>
  )
}

export default Login
