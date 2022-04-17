import React, { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { ThreeDotsVertical } from "react-bootstrap-icons";

import "./Navbar.css";

export class NavigationBar extends Component {
  render() {
    return (
      <div>
        <Navbar className="navbar-container" expand="lg">
          <Container
            style={{
              alignItems: "flex-start",
              maxWidth: "1200px",
            }}
          >
            <Navbar.Brand href="/">Anthony Cardellini</Navbar.Brand>
            <div className="links">
              <Navbar.Toggle
                className="kebab"
                style={{
                  border: "none",
                  boxShadow: "none",
                }}
                aria-controls="basic-navbar-nav"
              >
                <ThreeDotsVertical className="kebab-icon" />
              </Navbar.Toggle>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="about">About</Nav.Link>
                  <Nav.Link href="work">Work</Nav.Link>
                  <Nav.Link href="contact">Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Container>
        </Navbar>
      </div>
    );
  }
}
