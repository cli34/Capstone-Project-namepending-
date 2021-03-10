import React from "react"
import { useHistory } from "react-router-dom"
import * as ROUTES from "../../routes/routes"

const Landing = () => {
  const history = useHistory()
  return (
    <div>
      <div>Landing</div>
      <button onClick={() => history.push(ROUTES.LOGIN)}>Login</button>
      <button onClick={() => history.push(ROUTES.REGISTER)}>Register</button>
    </div>
  )
}

export default Landing
