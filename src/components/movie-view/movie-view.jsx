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
    <div className="movie-info">
      <div className="movie-info-container">
        <div className="movie-image">
          <img src={movie.image} width={500} className="image" />
        </div>
        <div className="movie-title">
          <span className="movie-Header">Title: </span>
          <span>{movie.title}</span>
        </div>
        <div>
          <span className="movie-Header">About: </span>
          <span>{movie.description}</span>
        </div>
        <div>
          <span className="movie-Header">Director: </span>
          <span>{movie.director}</span>
        </div>
        <div>
          <span className="movie-Header">Bio: </span>
          <span>{movie.bio}</span>
        </div>
        <div>
          <span classname="movie-Header">Birthday: </span>
          <span>{movie.birthday}</span>
        </div>
        <div>
          <span className="movie-Header">Deathday: </span>
          <span>{movie.deathday}</span>
        </div>
        <div>
          <span className="movie-Header">Genre: </span>
          <span>{movie.genre}</span>
        </div>
      </div>
      <Link to={`/`}>
        <Button variant="outline-secondary">Back</Button>
      </Link>
    </div>
  );
};

MovieView.proptypes = {
  movie: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    director: PropTypes.shape({
      name: PropTypes.string,
      bio: PropTypes.string,
      birthday: PropTypes.string,
      deathday: PropTypes.string,
    }).isRequired,
    description: PropTypes.string,
    genre: PropTypes.string,
  }).isRequired,
};