import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    location,
  },
}) => {
  return (
    <div className='bg-light display-flex'>
      <img src={avatar} alt='' className='round-img' />
      <div>
        <h2>{name}</h2>
        <p>{status}</p>
        <p className='my-1'>{location && <span>{location}</span>}</p>
        <NavLink to={`/profiles/${_id}`} className='btn btn-dark'>
          View Profile
        </NavLink>
      </div>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
