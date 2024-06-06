import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import PropTypes from "prop-types";

export const MovieView = ({ movies }) => {
  const { movieID } = useParams();
  const [movie, setMovie] = useState(null);

  // Handle case where movie is not found
  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-info">
      <div className="movie-info-container">
        <div className="movie-image">
          <img src={movie.image} width={100} className="image" />
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
          <span classname="movie-Header">Birthyear: </span>
          <span>{movie.birthyear}</span>
        </div>
        <div>
          <span className="movie-Header">Deathyear: </span>
          <span>{movie.deathyear}</span>
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
      birthyear: PropTypes.string,
      deathyear: PropTypes.string,
    }).isRequired,
    description: PropTypes.string,
    genre: PropTypes.string,
  }).isRequired,
};