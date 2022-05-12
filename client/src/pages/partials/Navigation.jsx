import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../actions/auth'

const Navigation = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (

    <Nav>
      <Nav.Link className="nav-item nav-link text-light" href="/profiles">Members</Nav.Link>
      <Nav.Link className="nav-item nav-link text-light" href="/posts">Posts</Nav.Link>
      <Nav.Link className="nav-item nav-link text-light" href="/login">
        <i className="fa fa-user"></i> Dashboard
      </Nav.Link>
      <Nav.Link className="nav-item nav-link text-light" href="/" onClick={logout}>
        <i className="fa fa-sign-out"></i> Logout
      </Nav.Link>
    </Nav>

    
  )

  const guestLinks = (
    <Nav>
      <Nav.Link className="nav-item nav-link text-light" href="/profiles">Members</Nav.Link>
      <Nav.Link className="nav-item nav-link text-light" href="/register">Register</Nav.Link>
      <Nav.Link className="nav-item nav-link text-light" href="/login">Login</Nav.Link>
    </Nav>
  )

  return (
    <Navbar bg="dark" variant='dark' expand="lg" className="navbar navbar-expand-lg">
    <Container>
      <Navbar.Brand className="navbar-brand fw-bold text-light " href="/">🍓 Stay Healthier</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className='flex-row-reverse'>
          {!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps, { logout })(Navigation)
