import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const ProfileItem = ({
  profile: {
    user,
    status,
    location,
  },
}) => {
  return (
    <div className='bg-light display-flex'>
      <img src={user?.avatar} alt='' />
      <div>
        <h2>{user?.name}</h2>
        <p>{status}</p>
        <p className='my-1'>{location && <span>{location}</span>}</p>
        <NavLink to={`/profile/${user?._id}`} className='btn btn-dark'>
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
