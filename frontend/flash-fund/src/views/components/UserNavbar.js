import React from "react"
import { Link } from "react-router-dom"
import { Navbar } from "react-bootstrap"
import "../../assets/css/login.css"

const user = "Ian"

const UserNavbar = () => {
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/home">Flash Fund</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Navbar.Text>User: {user}</Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default UserNavbar
