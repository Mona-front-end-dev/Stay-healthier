import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getProfileById } from '../../actions/profile'
import { useParams, NavLink } from 'react-router-dom'
import ProfileTop from './ProfileTop'
import ProfileAbout from './ProfileAbout'
import ProfileExperience from './ProfileExperience'

const Profile = ({ getProfileById, profile: { profile, loading }, auth }) => {
  const { id } = useParams()

  useEffect(() => {
    getProfileById(id)
  }, [getProfileById])

  return (
    <>
      {profile === null || loading ? (
        <h4>Loading ...</h4>
      ) : (
        <>
          <NavLink to="/profiles" className="btn btn-light my-2">
            Back to profiles
          </NavLink>
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user._id && (
              <NavLink to="/edit-profile" className="btn btn-dark">
                Edit Profile
              </NavLink>
            )}
          <div className="profile-grid my-1">
            <ProfileTop profile={profile} />
            <ProfileAbout profile={profile} />
            <div className="bg-light p-4">
              <h2 className="text-dark">Experience</h2>
              {profile.experience.length > 0 ? (
                <>
                  {profile.experience.map((experience) => (
                    <ProfileExperience
                      key={experience._id}
                      experience={experience}
                    />
                  ))}
                </>
              ) : (
                <h4>No experience Credentials</h4>
              )}
            </div>
          </div>
        </>
      )}
    </>
  )
}

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
})

export default connect(mapStateToProps, { getProfileById })(Profile)
