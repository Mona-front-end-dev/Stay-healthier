import React, { useState } from 'react';
import { Row, Form, Col, Button, Nav } from 'react-bootstrap';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2:'',
  });

  const { name, email, password, password2 } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]:e.target.value});

  const onSubmit = e => {
    e.preventDefault();
    if(password !== password2) {
      console.log('Passwords do not match');
    } else {
      console.log(formData);
    }
  }

  return (
    <Row>
      <Col>
        <h1 className="large text-dark">Sign Up</h1>
        <p className="lead"><i className="fa fa-user"></i> Create Your Account</p>
        <Form className="form" onSubmit={e => onSubmit(e)}>
          <Form.Group className="mb-3">
            <Form.Control 
              type="text" 
              placeholder="Name" 
              name="name" 
              value={name} 
              onChange={e => onChange(e)}
              required 
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control  
              type="email" 
              placeholder="Email Address" 
              name="email" 
              value={email} 
              onChange={e => onChange(e)} 
              required 
            />          
            <Form.Text>This site uses Gravatar so if you want a profile image, use a
              Gravatar email</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={password} 
              onChange={e => onChange(e)}
              minLength="6"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              name="password2"
              value={password2} 
              onChange={e => onChange(e)}
              minLength="6"
            />
          </Form.Group>
          <Button type="submit" variant="dark">
            Register
          </Button>
        </Form>
        <p className="my-1">
          Already have an account? <Nav.Link href="/login">Sign In</Nav.Link>
        </p>
      </Col>
    </Row>
  )
}

export default Register
