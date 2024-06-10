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
  const [birthday, setBirthdate] = useState(storedUser.birthDate);
  const [user, setUser] = useState();
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  if (!storedUser) {
    return <div>Loading...</div>;
  }




  const formData = {
    Username: username,
    Password: password,
    Email: email,
    Birthday: birthday
  };

  useEffect(() => {
    if (!token) {
      return;
    }

    fetch(`https://my-flix-db-975de3fb6719.herokuapp.com/users/${storedUser.Username}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("User data fetched:", data);
        setUser(data);

        // Log favorite movies from user data
        console.log("Fetched FavoriteMovies:", data.FavoriteMovies);

        const userFavoriteMovies = data.favoriteMovies
          ? movies.filter(movie => {
            console.log("Comparing movie ID:", movie._id, "with FavoriteMovies ID:", data.FavoriteMovies);
            return data.FavoriteMovies.includes(movie._id.toString());
          })
          : [];
        setFavoriteMovies(userFavoriteMovies);

        // Log the filtered favorite movies
        console.log("Filtered FavoriteMovies:", userFavoriteMovies);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [token, storedUser.Username, movies]);


  //triggers submit button
  const handleSubmit = (event) => {
    event.preventDefault(event);
    fetch(`https://my-flix-db-975de3fb6719.herokuapp.com/users/${storedUser.Username}`, {
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
  //updates user input
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
  //deletes account
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
  //updates profile information 
  useEffect(() => {
    if (!token || !storedUser) {
      return;
    }

    fetch(`https://my-flix-db-975de3fb6719.herokuapp.com/users/${storedUser.Username}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setUsername(data.Username);
        setEmail(data.Email);
        setBirthdate(data.Birthday);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [storedUser, token]);

  const handleFavoriteChange = (updatedFavoriteMovies) => {
    const userFavoriteMovies = movies.filter((movie) => updatedFavoriteMovies.includes(movie._id));
    setFavoriteMovies(userFavoriteMovies);

    // Log the updated favorite movies
    console.log("Updated FavoriteMovies:", userFavoriteMovies);
  };

  return (
    <Container>
      <Row>
        <Card className="mb-5">
          <Card.Body>
            <Card.Title className="text-center">My Profile</Card.Title>
            <Card.Text>
              <div>
                <p>Username: {username} </p>
                <p>Email: {email} </p>
              </div>
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
        <Col className="mb-5" xs={12} md={8}>
          <FavoriteMovies user={user} favoriteMovies={favoriteMovies} onFavoriteChange={handleFavoriteChange} />
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