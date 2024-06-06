import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Button, Card, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FavoriteMovies } from './user-favorites';
import { UpdateUser } from "./update-user";
import { UserInfo } from "./user-info";

export const ProfileView = ({ localUser, movies, token }) => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const favoriteMovies = user && user.favoriteMovies
    ? movies.filter(m => user.favoriteMovies.includes(m.title))
    : [];

  if (!user) {
    return <div>Loading...</div>;
  }


  const handleSubmit = (event) => {
    event.preventDefault(event);
    fetch(`https://my-flix-db-975de3fb6719.herokuapp.com/users/${user.Username}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    }
    )
      .then((response) => {
        if (response.ok) {
          alert("Update successful");
          return response.json();
        }
        alert("Update failed");
        throw new Error("Update failed");
      })
      .then((updatedUser) => {
        localStorage.setItem('user', JSON.stringify(updatedUser));
        setUser(updatedUser);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleUpdate = (e) => {
    switch (e.target.type) {
      case "text":
        setUsername(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "date":
        setBirthdate(e.target.value);
      default:
    }
  }

  const handleDeleteAccount = () => {
    fetch(`https://my-flix-db-975de3fb6719.herokuapp.com/users/${storedUser.Username}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    }).then((response) => {
      if (response.ok) {
        alert("Account deleted successfully.");
        localStorage.clear();
        window.location.reload();
      } else {
        alert("Something went wrong.");
      }
    });
  };

  useEffect(() => {
    if (!token) {
      return;
    }

    fetch(`https://my-flix-db-975de3fb6719.herokuapp.com/users/${storedUser.username}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("User data fetched:", data);
        setUser(data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [token]);


  return (
    <Container>
      <Row>
        <Card className="mb-5">
          <Card.Body>
            <Card.Title>My Profile</Card.Title>
            <Card.Text>
              <UserInfo username={user.Username} email={user.Email} />
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="mb-5">
          <Card.Body>
            <UpdateUser
              formData={user}
              handleUpdate={handleUpdate}
              handleSubmit={handleSubmit}
              handleDeleteAccount={handleDeleteAccount}
            />
          </Card.Body>
        </Card>
      </Row>
      <Row>
        <Col className="mb-5" xs={12} md={8}>
          {user && favoriteMovies.length > 0 ? (
            <FavoriteMovies user={user} favoriteMovies={favoriteMovies} />
          ) : (
            <p>No favorite movies found.</p>
          )}
        </Col>
      </Row>
    </Container>
  )
}

ProfileView.propTypes = {
  movies: PropTypes.array.isRequired,
  token: PropTypes.string.isRequired
};