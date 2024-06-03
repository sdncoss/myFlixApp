import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Button, Card, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FavoriteMovies } from './user-favorites';
import { UpdateUser } from "./update-user";

export const ProfileView = ({ localUser, movies, token }) => {
  const storedUser = JSON.parse(localStorage.getItem("user"));

  const [username, setUsername] = useState(storedUser.username);
  const [email, setEmail] = useState(storedUser.email);
  const [password, setPassword] = useState(storedUser.password);
  const [birthDate, setBirthdate] = useState(storedUser.birthDate);
  const [user, setUser] = useState();
  const favoriteMovies = user === undefined ? [] : movies.filter(m => user.favoriteMovies.includes(m.title))

  const formData = {
    username: username,
    email: email,
    birthDate: birthDate,
    password: password
  };
  const handleSubmit = (event) => {
    event.preventDefault(event);
    fetch(`https://my-flix-db-975de3fb6719.herokuapp.com/users/${user.Username}`, {
      method: "PUT",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    }
    )
      .then((response) => {
        if (response.ok) {
          alert("Update successful");
          window.location.reload();

          return response.json()
        }
        alert("Update failed");
      })
      .then((user) => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          setUser(user)
        }
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

    fetch(`https://my-flix-db-975de3fb6719.herokuapp.com/users/${localUser.username}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => response.json())
      .then((userData) => {
        setUser(userData);
        console.log("Profile Saved User: " + JSON.stringify(userData));
      })
      .catch((error) => {
        console.error(error);
      });
  }, [localUser.username, token]);

  return (
    <Container >
      <Row>
        <Card className="mb-5">
          <Card.Body>
            <Card.Title>My Profile  </Card.Title>
            <Card.Text>
              {
                user && (<UserInfo name={user.username} email={user.email} />)
              }
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="mb-5">
          <Card.Body>
            <UpdateUser
              formData={formData}
              handleUpdate={handleUpdate}
              handleSubmit={handleSubmit}
              handleDeleteAccount={handleDeleteAccount}
            />
          </Card.Body>
        </Card>
      </Row>
      <Row>
        <Col className="mb-5" xs={12} md={12}>
          {
            favoriteMovies && (<FavoriteMovies user={user} favoriteMovies={favoriteMovies} />)
          }
        </Col>
      </Row>
    </Container>
  )
}

ProfileView.propTypes = {
  localUser: PropTypes.object.isRequired,
  movies: PropTypes.array.isRequired,
  token: PropTypes.string.isRequired
};