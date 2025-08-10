import React from "react";
import { Navbar as BsNavbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
const Navbar = () => {
  return (
    <BsNavbar bg="dark" variant="dark" expand="md" sticky="top">
      <Container>
        <BsNavbar.Brand href="#home">Nisha's Portfolio</BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="main-navbar-nav" />
        <BsNavbar.Collapse id="main-navbar-nav ">
          <Nav className="ms-auto">
            <Nav.Link href="/" className="nav">
              Home
            </Nav.Link>
            <Nav.Link href="/about" className="nav">
              About
            </Nav.Link>
            <Nav.Link href="/projects" className="nav">
              Projects
            </Nav.Link>
            <Nav.Link href="/skills" className="nav">
              Skills
            </Nav.Link>
            <Nav.Link href="/contact" className="nav">
              Contact
            </Nav.Link>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
};

export default Navbar;
