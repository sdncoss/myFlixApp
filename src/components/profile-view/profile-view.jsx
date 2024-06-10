import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Button, Card, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FavoriteMovies } from './user-favorites';
import { UpdateUser } from "./update-user";
import { UserDelete } from "./user-delete";


export const ProfileView = ({ movies, user }) => {
  if (!user) {
    return <div>User data not available</div>;
  }
  const { Username, Email, Birthday, Password } = user;


  return (
    <Container>
      <Row>
        <Card className="mb-5">
          <Card.Body>
            <Card.Title className="text-center">My Profile</Card.Title>
            <UserInfo
              name={user.Username}
              email={user.Email}
              birthday={user.Birthday}
              password={user.Password}
            />
          </Card.Body>
        </Card>
        <Card className="mb-5">
          <Card.Body>
            <UpdateUser />
            <UserDelete />
          </Card.Body>
        </Card>
      </Row>
      <Row>
        <Col className="mb-5" xs={12} md={8}>
          <FavoriteMovies movies={movies} user={user} />
        </Col>
      </Row>
    </Container>
  );
};

