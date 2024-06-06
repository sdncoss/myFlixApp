import React from 'react'
import PropTypes from "prop-types"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

export const UserInfo = ({ email, username }) => {
  return (
    <div>
      <p>Username: {username} </p>
      <p>Email: {email} </p>
    </div>
  )
}