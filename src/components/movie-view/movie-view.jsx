import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import PropTypes from "prop-types";

export const MovieView = ({ movies }) => {
  const { movieID } = useParams();

  // Log movieId to check its value
  console.log("Movie ID:", movieID);
  //find movie by id
  const movie = movies.find((m) => m._id === movieID);

  // Log movies to check their contents
  console.log("Movies:", movies);

  // Handle case where movie is not found
  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <>
      <Card className="h-100" >
        <Card.Img variant="top" src={movie.image} className="object-fit-cover" />
        <Card.Body>
          <Card.Title>Title: {movie.title}</Card.Title>
          <Card.Text>About: {movie.description}</Card.Text>
          <Card.Text>Genre: {movie.genre}</Card.Text>
          <Card.Text>Director: {movie.director}</Card.Text>
        </Card.Body>
      </Card>
      <Link to={`/`}>
        <button className="back-button" >Back</button>
      </Link>
    </>

  );
};

MovieView.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string,
      description: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      director: PropTypes.string.isRequired,
      featured: PropTypes.bool.isRequired,
    })
  ).isRequired,
};