import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { Row } from 'react-bootstrap'

const ProfileTop = ({
  profile: {
    status,
    location,
    social,
    user: { name, avatar },
  },
}) => {
  return (
    <div className="bg-light text-center p-4">
      <img className="my-1" src={avatar} alt="" />
      <h1>{name}</h1>
      <p className="lead">{status}</p>
      <p>{location && <span>{location}</span>}</p>
      <div className="icons my-1">
        {social && social.facebook && (
          <NavLink
            to={social.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-facebook fa-2x text-dark mx-2"></i>
          </NavLink>
        )}
        {social && social.instagram && (
          <NavLink
            to={social.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-instagram fa-2x text-dark mx-2"></i>
          </NavLink>
        )}
        {social && social.youtube && (
          <NavLink
            to={social.youtube}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-youtube fa-2x text-dark mx-2"></i>
          </NavLink>
        )}
      </div>
    </div>
  )
}

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
}

export default ProfileTop
