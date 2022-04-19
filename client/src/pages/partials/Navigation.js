import React from 'react';
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Nav className="navbar navbar-expand-lg" >
        <Container>       
            <Nav.Link className="navbar-brand fw-bold text-light" href="#">Stay Healthier</Nav.Link>   
          <Nav.Item className="navbar-nav">
              <Nav.Link className="nav-item nav-link text-light" href="#">Register</Nav.Link>
              <Nav.Link className="nav-item nav-link text-light" href="#">Login</Nav.Link>
          </Nav.Item>           
        </Container>
    </Nav>
  )
}

export default Navigation
