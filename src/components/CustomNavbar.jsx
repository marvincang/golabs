import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { FormGroup, FormControl, Button, ControlLabel } from 'react-bootstrap';
import creds from './../Creds.json'
import './../styles/CustomNavbar.css';

export default class CustomNavbar extends Component {
  constructor() {
    super();

    this.state = {
      "logged": false,
      "email": "",
      "password": "",
    }

    this.user = {
      "name": "",
      "mode": ""
    }

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleEmailChange(term) {
    this.setState({
      "email": term
    })
  }

  handlePasswordChange(term) {
    this.setState({
      "password": term
    })
  }

  handleLogin() {
    let b = false;
    creds.creds.forEach(cred => {
      if (this.state.email === cred.email && this.state.password === cred.password) {
        b = true;
        this.user = {
          "name": cred.name,
          "mode": cred.mode
        }
      }
    })
    if (b) {
      this.setState({
        "logged": true
      })
    }
  }

  handleLogout() {
    this.setState({
      "logged": false
    })
  }

  render() {
    let login = "";
    if (this.state.logged) {
      login =
        <Nav pullRight>
          <NavDropdown eventKey={2} title={this.user.name + " (" + this.user.mode + ")"}  className="accountText">
            <MenuItem eventKey={2.1} onClick={this.handleLogout}>Logout</MenuItem>
          </NavDropdown>
        </Nav>
    } else {
      login =
        <Navbar.Form pullRight>
          <FormGroup>
            {/* <ControlLabel>Email</ControlLabel> */}
            <FormControl id="email" type="email" placeholder="Email" onChange={event => this.handleEmailChange(event.target.value)} />
          </FormGroup>{' '}
          <FormGroup>
            {/* <ControlLabel>Password</ControlLabel> */}
            <FormControl id="password" type="password" placeholder="Password" onChange={event => this.handlePasswordChange(event.target.value)} />
          </FormGroup>{' '}
          <Button type="submit" bsStyle="primary" onClick={this.handleLogin}>Login</Button>
        </Navbar.Form>
    }

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
            <NavItem eventKey={1} href="#home">
              Home
            </NavItem>
          </Nav>
          {login}
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
