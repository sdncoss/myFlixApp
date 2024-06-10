import React from "react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

export const UserDelete = () => {
  const [message, setMessage] = useState("");
  const [storedUser, setStoredUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {}
  );
  const [storedToken, setStoredToken] = useState(
    localStorage.getItem("token") || ""
  );
  const handleDelete = async () => {
    if (!storedToken) {
      console.log("Token not found in localstorage");
      return;
    }

    try {
      const response = await fetch(
        `https://my-flix-db-975de3fb6719.herokuapp.com/users/${storedUser.Username}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        }
      );
      if (response.ok) {
        setMessage("User deleted successfully");
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      } else {
        setMessage("Error deleting user");
      }
    } catch (error) {
      console.error("Error deleting user", error);
      setMessage("Error deleting user");
    }
  };
  return (
    <div className="delete-user">
      <h1 className="delete-account">Delete Account</h1>
      <p>{message}</p>
      <Button
        onClick={handleDelete}
        variant="outline-secondary"
        className="mx-3" >
        Delete Account
      </Button>
    </div>
  );
};