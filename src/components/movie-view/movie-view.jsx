import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import PropTypes from "prop-types";

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(storedToken ? storedToken : null);

  useEffect(() => {
    fetch(
      `https://my-flix-db-975de3fb6719.herokuapp.com/movies/:movieId`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
      })
      .catch((error) => console.error('Error fetching movie:', error));
  }, [movieId]);

  if (loading) {
    return <div>Loading...</div>
  }

  // Handle case where movie is not found
  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <Card>
      <Card.Img variant="top" src={movie.image} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <Card.Text>Genre: {movie.genre}</Card.Text>
        <Card.Text>Director: {movie.director}</Card.Text>
        <Card.Text>Bio: {movie.bio}</Card.Text>
        <Card.Text>Birthyear: {movie.birthyear}</Card.Text>
        <Card.Text>Deathyear: {movie.deathyear}</Card.Text>
      </Card.Body>
      <Link to={`/`}>
        <Button variant="outline-secondary">Back</Button>
      </Link>
    </Card>
  );
};

MovieView.proptypes = {
  movie: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    director: PropTypes.shape({
      name: PropTypes.string,
      bio: PropTypes.string,
      birthyear: PropTypes.string,
      deathyear: PropTypes.string,
    }).isRequired,
    description: PropTypes.string,
    genre: PropTypes.string,
  }).isRequired,
};