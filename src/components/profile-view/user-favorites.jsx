import React from "react";
import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { MovieCard } from "../movie-card/movie-card";

export const FavoriteMovies = ({ movies, user }) => {
  if (!movies || !user || !user.FavoriteMovies) {
    return <div>No favorite movies available</div>;
  }

  const [favoriteMovies, setFavoriteMovies] = useState([]);
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

        // Log favorite movies from user data
        console.log("Fetched FavoriteMovies:", data.FavoriteMovies);

        // Log type of FavoriteMovies IDs
        data.FavoriteMovies.forEach(id => {
          console.log("Favorite Movie ID type:", typeof id);
        });

        const userFavoriteMovies = data.favoriteMovies
          ? movies.filter(movie => {
            console.log("Comparing movie ID:", movie.id, "with FavoriteMovies ID:", data.FavoriteMovies);
            return data.FavoriteMovies.includes(movie.id);
          })
          : [];
        setFavoriteMovies(userFavoriteMovies);

        // Log the filtered favorite movies
        console.log("Filtered FavoriteMovies:", userFavoriteMovies);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [token, storedUser.Username, movies]);

  const handleFavoriteChange = (updatedFavoriteMovies) => {
    const userFavoriteMovies = movies.filter((movie) => updatedFavoriteMovies.includes(movie.id));
    setFavoriteMovies(userFavoriteMovies);

    // Log the updated favorite movies
    console.log("Updated FavoriteMovies:", userFavoriteMovies);
  };

  // Ensure that movies is an array
  if (!Array.isArray(movies)) {
    return <div>Invalid movies data</div>;
  }

  let favoritedMovies = movies.filter((movie) =>
    user.FavoriteMovies.includes(movie.id)
  );

  return (
    <Row>
      <Col md={12} >
        <h3>My Favorite Movies</h3>
      </Col>
      <Row>
        {favoritedMovies.map((movie) => (
          <Col key={movie.id} md={4} xs={6} lg={3}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </Row>
  );
};

