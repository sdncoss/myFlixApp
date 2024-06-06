import React from 'react'
import PropTypes from "prop-types"


export const UserInfo = ({ email, username }) => {
  return (
    <div>
      <p>Username: {username} </p>
      <p>Email: {email} </p>
    </div>
  )
}

UserInfo.propTypes = {
  email: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
};