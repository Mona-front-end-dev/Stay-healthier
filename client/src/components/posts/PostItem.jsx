import React from 'react'
import PropTypes from 'prop-types'
import { NavLink, NavItem } from 'react-bootstrap'
import Moment from 'react-moment'
import { connect } from 'react-redux'

const PostItem = ({ auth, post: { _id, text, name, avatar, user, date } }) => {
  return (
    <div className="bg-light border p-1 my-4 d-flex">
      <NavItem>
        <NavLink to="/profile">
          <img className="img-thumbnail m-4" src={avatar} alt="user's avatar" />
          <h4 className="text-dark py-4 text-center">{name}</h4>
        </NavLink>
      </NavItem>
      <div className="p-4 m-4">
        <p className="my-1">{text}</p>
        {!auth.loading && user === auth.user._id && (
          <button type="button" className="btn btn-danger float-end">
            <i className="fa fa-trash"></i>
          </button>
        )}
        <p className="">
          Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
        </p>
      </div>
    </div>
  )
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})
export default connect(mapStateToProps, {})(PostItem)
