
import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import PropTypes from "prop-types";


export const LoginView = ({ onLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password
    };


    fetch("https://my-flix-db-975de3fb6719.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then((response) => response.json())
      .then((data) => {
        console.log("Login response: ", data);
        if (data.user) {
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("token", data.token);
          onLoggedIn(data.user, data.token);
        } else {
          alert("No such user");
        }
      })
      .catch((e) => {
        console.error("Login error: ", e.message);
        if (error.response) {
          console.error("Server responded with.", error.response.data);
        }
        alert("Something went wrong " + e.message);
      });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formUsername">
        <Form.Label>Username:</Form.Label>
        <Form.Control
          type="text"
          value={username}
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
          required
          minLength="3"
          className="mb-4"
        />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4"
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

LoginView.propTypes = {
  onLoggedIn: PropTypes.func.isRequired,
};

