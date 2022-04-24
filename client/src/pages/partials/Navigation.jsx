import React from 'react';
import { Nav, NavLink, NavItem } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

const Navigation = () => {
  
  return (
    <Nav className="navbar navbar-expand-lg bg-dark" >
        <Container>       
            <NavLink className="navbar-brand fw-bold text-light " href="/">Stay Healthier</NavLink>   
            <NavItem className="navbar-nav">
                <NavLink className="nav-item nav-link text-light" href="!#">Members</NavLink>
                <NavLink className="nav-item nav-link text-light" href="/register">Register</NavLink>
                <NavLink className="nav-item nav-link text-light" href="/login">Login</NavLink>
            </NavItem>           
        </Container>
    </Nav>
  )
}

export default Navigation
