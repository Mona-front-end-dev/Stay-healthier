import React, { useState } from 'react';
import { Row, Form, Col, Button, Nav } from 'react-bootstrap';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]:e.target.value});

  const onSubmit = e => {
    e.preventDefault(); 
    console.log('Success');   
  }

  return (
    <Row>
      <Col>
        <h1 className="large text-dark">Sign In</h1>
        <p className="lead"><i className="fa fa-user"></i>Sign into Your Account</p>
        <Form className="form" onSubmit={e => onSubmit(e)}>
          <Form.Group className="mb-3">
            <Form.Control  
              type="email" 
              placeholder="Email Address" 
              name="email" 
              value={email} 
              onChange={e => onChange(e)} 
              required 
            />   
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
          <Button type="submit" variant="dark">
            Sign In
          </Button>
        </Form>
        <p className="my-1">
          Don't have an account? <Nav.Link href="/register">Sign up</Nav.Link>
        </p>
      </Col>
    </Row>
  )
}

export default Login
