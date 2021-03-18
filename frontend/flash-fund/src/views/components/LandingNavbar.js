import React from "react"
import { Link } from "react-router-dom"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import "../../assets/css/login.css"

const LandingNavbar = () => {
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>Flash Fund</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/register">Register</Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default LandingNavbar
