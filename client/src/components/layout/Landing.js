import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const Landing = () => {
  return (
    <Row className="mt-5" >
        <Col className="form-wrapper ">
            <Form.Group className="mb-5 text-center pt-5 mt-5">         
                <Form.Text className="text-dark fs-3">
                    <h2 className="fw-bold">Fruiterians Community</h2>
                    Create a fruiterian profile and share posts.
                </Form.Text>
            </Form.Group>
            <div className="btn-wrapper pb-5">       
                <Button variant="dark" type="submit">
                    Sign Up
                </Button>
                <Button type="submit" variant="light">
                    Login
                </Button>
            </div>
        </Col>
    </Row>
  )
}

export default Landing
