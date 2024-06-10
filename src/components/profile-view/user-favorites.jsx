import React from 'react'
import PropTypes from "prop-types";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { MovieCard } from '../movie-card/movie-card'
//import { Link } from 'react-router-dom'

export const FavoriteMovies = ({ user, favoriteMovies, onFavoriteChange }) => {
  if (!favoriteMovies || favoriteMovies.length === 0) {
    return <div>No Favorite Movies</div>
  }

  return (
    <Row>
      <Col md={12} >
        <h3>My Favorite Movies</h3>
      </Col>
      <Row>
        {favoriteMovies.map((movie) => (
          <Col key={movie.id} xs={12} sm={6} md={4} lg={3}>
            <MovieCard movie={movie}
              isFavorite={user.favoriteMovies.includes(movie.id)}
              onFavoriteChange={onFavoriteChange} />
          </Col>
        ))}
      </Row>
    </Row>
  );
};

FavoriteMovies.propTypes = {
  favoriteMovies: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
  onFavoriteChange: PropTypes.func.isRequired,
};