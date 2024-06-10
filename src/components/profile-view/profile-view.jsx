import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Button, Card, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FavoriteMovies } from './user-favorites';
import { UpdateUser } from "./update-user";


export const ProfileView = ({ user, movies }) => {
  const storedUser = JSON.parse(localStorage.getItem("user"));

  const [username, setUsername] = useState(storedUser.username);
  const [email, setEmail] = useState(storedUser.email);
  const [password, setPassword] = useState(storedUser.password);
  const [birthday, setBirthdate] = useState(storedUser.birthDate);
  const [user, setUser] = useState();

  if (!storedUser) {
    return <div>Loading...</div>;
  }




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
            />
            <UserDelete handleDeleteAccount={handleDeleteAccount} />
          </Card.Body>
        </Card>
      </Row>
      <Row>
        <Col className="mb-5" xs={12} md={8}>
          <FavoriteMovies movies={movies} user={user} />
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