import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie, onToggleFavorite }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);

  useEffect(() => {
    if (user && user.FavoriteMovies) {
      setIsFavorite(user.FavoriteMovies.includes(movie.id));
    }
  }, [user, movie.id]);

  const addToFavorites = () => {
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
        setIsFavorite(true);
        onToggleFavorite(movie.id, true);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const removeFromFavorites = () => {
    fetch(
      `https://my-flix-db-975de3fb6719.herokuapp.com/users/${user.Username}/movies/${encodeURIComponent(movie.id)}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to remove movie from favorites.");
        }
        alert("Movie removed from favorites!");
        return response.json();
      })
      .then((user) => {
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
        setIsFavorite(false);
        onToggleFavorite(movie.id, false);
      })
      .catch((error) => {
        console.error(error);
      });
  };


  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites();
    } else {
      addToFavorites();
    }
  };



  return (
    <Card>
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