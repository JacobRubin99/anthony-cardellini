import React, { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

import "./Navbar.css";

export class NavigationBar extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="home">Anthony Cardellini</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="about">About</Nav.Link>
              <Nav.Link href="work">Work</Nav.Link>
              <Nav.Link href="contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
