import React from "react"
import { Link } from "react-router-dom"

const Register = () => {
  const handleSubmit = (e) => {}
  //const [registerState, setRegisterState] = useState()
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="email"></input>
        <br />
        <input
          placeholder="password"
          onChange={(e) => {
            //setRegisterState(...registerState, e.target.value)
          }}
        ></input>
        <br />
        <button>Register</button>
        <br />
        <a href="/">landing</a>
      </form>
    </div>
  )
}

export default Register
