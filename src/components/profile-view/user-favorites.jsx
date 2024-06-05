import React from 'react'
//import PropTypes from "prop-types";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { MovieCard } from '../movie-card/movie-card'
//import { Link } from 'react-router-dom'

export const FavoriteMovies = ({ user, movies }) => {
  if (!movies || !user || !user.FavoriteMovies) {
    return <div>No Favorite Movies</div>
  }
  if (!Array.isArray(movies)) {
    return <div>Invalid Movies Data</div>
  }
  let favoriteMovies = movies.filter((movie) =>
    user.FavoriteMovies.include(movie.id)
  );
  return (
    <Row>
      <Col md={12} >
        <h3>My Favorite Movies</h3>
      </Col>
      <Row>
        {favoriteMovies.map((movie) => (
          <Col key={movie.id} xs={12} sm={6} md={4} lg={3}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </Row>
  );
};
