import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Image } from 'react-bootstrap';
import './../styles/CustomNavbar.css';

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">GoLabs</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">
              Home
            </NavItem>
            <NavItem eventKey={2} href="#">
              About
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem className="accountText">
              Marvin Cangcianno
              <br />
              Admin
            </NavItem>
            <NavItem eventKey={4} href="#">
              <Image src="/acc.png" className="icon" circle />
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
