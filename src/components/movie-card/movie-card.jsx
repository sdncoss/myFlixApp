import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie, onToggleFavorite }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState();
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);

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

        const userFavoriteMovies = data.isFavorite
          ? movie.filter(movie => {
            console.log("Comparing movie ID:", movie.id, "with isFavorite ID:", data.FavoriteMovies);
            return data.isFavorite.includes(movie.id);
          })
          : [];
        setIsFavorite(userFavoriteMovies);

        // Log the filtered favorite movies
        console.log("Filtered FavoriteMovies:", userFavoriteMovies);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [token, storedUser.Username, movie]);



  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    onToggleFavorite(movie.id, !isFavorite);
  };



  return (
    <Card
      className="movie-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/movies/${encodeURIComponent(movie.id)}`}>
        <Card.Img
          variant="top"
          src={movie.image}
          className="movie-card-image"
        />
      </Link>
      <Card.Body>
        <Card.Title className="movieTitle">{movie.title}</Card.Title>
        <Card.Text className="movieGenre">{movie.genre}</Card.Text>
        <Link to={`/movies/${encodeURIComponent(movie.id)}`}>
          <Button variant="link" className="open-button">
            More Info
          </Button>
        </Link>
        <Button variant="primary" onClick={handleToggleFavorite}>
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </Button>
        {isHovered && (
          <div className="description-box">{movie.description}</div>
        )}
      </Card.Body>
    </Card>
  );
};

MovieCard.proptypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    director: PropTypes.string,
    description: PropTypes.string,
    genre: PropTypes.string,
    id: PropTypes.string.isRequired,
    featured: PropTypes.bool,
  }).isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
};