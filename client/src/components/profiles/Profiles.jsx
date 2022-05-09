import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfiles } from '../../actions/profile';
import ProfileItem from './ProfileItem';

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, []);
  return <>
      {loading ? (
        <div className='spinner-border text-secondary'></div>
      ) : (
        <>
          <h1 className='large text-dark'>Members</h1>
          <p className='load'>Brows and connect with members</p>
          <div className='profiles'>
            {(profiles.length > 0) ? (
              profiles.map((profile) => (
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) : (
              <h4>No profile found.. .</h4>
            )}
          </div>
        </>
      )}
    </>
  ;
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
