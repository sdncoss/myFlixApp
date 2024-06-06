import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import PropTypes from "prop-types";

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (movies) {
      const foundMovie = movies.find((m) => m.id === movieId);
      setMovie(foundMovie);
    }
  }, [movies, movieId]);

  // Handle case where movie is not found
  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <Card className="h-100" >
      <Card.Img variant="top" src={movie.image} className="object-fit-scale" />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <Card.Text>{movie.genre}</Card.Text>
        <Card.Text>Director: {movie.director}</Card.Text>
        <Card.Text>Birthyear {movie.birthyear} - Deathyear {movie.deathyear}</Card.Text>
        <Card.Text>Bio: {movie.bio}</Card.Text>
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