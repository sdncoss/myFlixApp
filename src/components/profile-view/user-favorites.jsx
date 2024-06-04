import React from 'react'
import PropTypes from "prop-types";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { MovieCard } from '../movie-card/movie-card'
import { Link } from 'react-router-dom'

export const FavoriteMovies = ({ user, favoriteMovies }) => {
  console.log('FavoriteMovies user:', user);
  console.log('FavoriteMovies favoriteMovies:', favoriteMovies);

  return (
    <Row>
      <Col md={12} >
        <h3>My Movies</h3>
      </Col>
      <Row>
        {favoriteMovies.length > 0 ? (
          favoriteMovies.map((movie) => {
            return (
              <Col className="mb-5" key={movie.id} md={4}>
                <Link to={`/movies/${movie.id}`}>
                  <MovieCard
                    movie={movie}
                    isFavorite={user.favoriteMovies.includes(movie.id)}
                  />
                </Link>
              </Col>
            );
          })
        ) : (
          <Col>
            <p>No favorite movies found.</p>
          </Col>
        )}
      </Row>
    </Row>
  );
};
FavoriteMovies.propTypes = {
  favoriteMovies: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired
};