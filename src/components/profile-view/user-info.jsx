import React from 'react'
import { useEffect, useState } from "react";
import PropTypes from "prop-types"


export const UserInfo = ({ email, username }) => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const username = useState(storedUser.username);
  const email = useState(storedUser.email);
  return (
    <div>
      <p>Username: {username.username} </p>
      <p>Email: {email.email} </p>
    </div>
  )
}

UserInfo.propTypes = {
  email: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
};