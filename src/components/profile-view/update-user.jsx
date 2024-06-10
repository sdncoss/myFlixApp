import React from 'react';
import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap/Form';



export const UpdateUser = () => {
  const [storedUser, setStoredUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const [storedToken, setStoredToken] = useState(localStorage.getItem("token"));
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  useEffect(() => {
    setStoredUser(JSON.parse(localStorage.getItem("user")));
    setStoredToken(localStorage.getItem("token"));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      console.log("Token not found in localStorage");
      return;
    }
    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday,
    };

    try {
      const response = await fetch(
        `https://my-flix-db-975de3fb6719.herokuapp.com/users/${storedUser.Username}`,
        {
          method: "PUT",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        alert("User Info Updated!");
        const updatedUser = await response.json();
        localStorage.setItem("user", JSON.stringify(updatedUser));
        setUsername(updatedUser.Username);
        setPassword(updatedUser.Password);
        setEmail(updatedUser.Email);
        setBirthday(updatedUser.Birthday);
      } else {
        alert("Update failed!");
      }
    } catch (error) {
      console.error("Error updating user", error);
      alert("Update failed");
    }
  };
  return (
    <Form onSubmit={handleSubmit} >
      <div>
        <h1>Update User Information</h1>
      </div>
      <Form.Group controlId="formUsername" className="userNameGroup">
        <Form.Label>Username</Form.Label>
        <Form.Control
          className="inputUser"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          minLength="3"
        />
      </Form.Group>

      <Form.Group controlId="formPassword" className="userNameGroup">
        <Form.Label>Password</Form.Label>
        <Form.Control
          className="inputUser"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formEmail" className="userNameGroup">
        <Form.Label>Email</Form.Label>
        <Form.Control
          className="inputUser"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formBirthday" className="userNameGorup">
        <Form.Label>Birthday</Form.Label>
        <Form.Control
          className="inputUser"
          type="date"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="primary" onSubmit={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
};