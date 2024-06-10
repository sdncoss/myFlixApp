import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie, onToggleFavorite }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState();
  const handleToggleFavorite = () => {
    fetch(
      `https://my-flix-db-975de3fb6719.herokuapp.com/users/${user.Username}/movies/${encodeURIComponent(movie.id)}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add movie to favorites.");
        }
        alert("Movie added to favorite!");
        return response.json();
      })
      .then((user) => {
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
        onFavoriteChange(user.FavoriteMovies);
      })
      .catch((error) => {
        console.error(error);
      });
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