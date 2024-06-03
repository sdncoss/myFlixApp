import { useParams } from "react-router";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();
  //find movie by id
  const movie = movies.find((m) => m._id === movieId);

  // Handle case where movie is not found
  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <div>
        <img src={movie.ImagePath} className="img-fluid  justify-content-md-center" alt="Movie Poster" />
      </div>
      <div>
        <span style={{ fontWeight: 'bold' }}>Title: </span>
        <span style={{ fontWeight: 'bold' }}>{movie.Title}</span>
      </div>
      <div>
        <span>Description: </span>
        <span>{movie.Description}</span>
      </div>
      <div>
        <span>Genre: </span>
        <span>{movie.Genre}</span>
      </div>
      <div>
        <span>Director: </span>
        <span>{movie.Director}</span>
      </div>
      <div>
        <span>Featured: </span>
        <span>{movie.featured ? "True" : "False"}</span>
      </div>
      <Link to={`/`}>
        <button className="back-button" >Back</button>
      </Link>
    </div>
  );
};

MovieView.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      director: PropTypes.string.isRequired,
      featured: PropTypes.bool.isRequired,
    })
  ).isRequired,
};