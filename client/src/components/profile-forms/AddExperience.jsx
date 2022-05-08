import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import { addExperience } from '../../actions/profile';
import { Form } from 'react-bootstrap';

const AddExperience = ({ addExperience }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    from: '',
    to: '',
    current: false,
    description: '',
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const { title, from, to, current, description } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <>
      <h1 className='large text-dark'>Add An Experience</h1>
      <p className='lead'>
        <i className='fa fa-black-tie'></i> Add any experience about this life
        style you have had
      </p>
      <small>* = required field</small>
      <Form
        className='form'
        onSubmit={(e) => {
          e.preventDefault();
          addExperience(formData, navigate('/dashboard'));
        }}
      >
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type='text'
            placeholder='* Title'
            name='title'
            value={title}
            onChange={(e) => onChange(e)}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>From Date</Form.Label>
          <Form.Control
            type='date'
            name='from'
            value={from}
            onChange={(e) => onChange(e)}
          />
        </Form.Group>
        <Form.Group>
          <p>
            <input
              type='checkbox'
              name='current'
              checked={current}
              value={current}
              onChange={(e) => {
                setFormData({ ...formData, current: !current });
                toggleDisabled(!toDateDisabled);
              }}
            />{' '}
            Current
          </p>
        </Form.Group>
        <Form.Group>
          <Form.Label>To Date</Form.Label>
          <Form.Control
            type='date'
            name='to'
            value={to}
            onChange={(e) => onChange(e)}
            disabled={toDateDisabled ? 'disabled' : ''}
          />
        </Form.Group>
        <Form.Group className='my-3'>
          <Form.Control
            as='textarea'
            name='description'
            rows={5}
            placeholder='Description'
            value={description}
            onChange={(e) => onChange(e)}
          />
        </Form.Group>
        <input type='submit' className='btn btn-dark my-1' />
        <a className='btn btn-light my-1' href='dashboard.html'>
          Go Back
        </a>
      </Form>
    </>
  );
};

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
};

export default connect(null, { addExperience })(AddExperience);
