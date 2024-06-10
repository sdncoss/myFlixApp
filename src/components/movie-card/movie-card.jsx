import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie, isFavorite, onFavoriteChange }) => {
  const storedToken = localStorage.getItem("token");
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);


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
        const updatedFavoriteMovies = user.FavoriteMovies;
        const isMovieFavorite = updatedFavoriteMovies.includes(movie.id);
        onFavoriteChange(isMovieFavorite, updatedFavoriteMovies);
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
        const updatedFavoriteMovies = user.FavoriteMovies;
        const isMovieFavorite = updatedFavoriteMovies.includes(movie.id);
        onFavoriteChange(isMovieFavorite, updatedFavoriteMovies);
      })
      .catch((error) => {
        console.error(error);
      });
  };


  return (
    <>
      <Link to={`/movies/${encodeURIComponent(movie._id)}`} className="movie-view">
        <Card className="h-60 text-center" >
          <Card.Img variant="top" src={movie.image} className="object-fit-scale" />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>{movie.genre}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
      <Card>
        {isFavorite ? (
          <Button variant="primary" onClick={removeFromFavorites}>Remove from Favorites</Button>
        ) : (
          <Button variant="primary" onClick={addToFavorites}>Add to Favorites</Button>
        )}
      </Card>
    </>
  );
};

MovieCard.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  onFavoriteChange: PropTypes.func,
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string,
    genre: PropTypes.string,
    director: PropTypes.string,
    featured: PropTypes.bool
  }).isRequired,
};
