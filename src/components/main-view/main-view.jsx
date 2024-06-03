import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view"
import { SignupView } from "../signup-view/signup-view";
import { Row, Col } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NavigationBar } from "../navigation-bar/nvaigation-bar";
import { ProfileView } from "../profile-view/profile-view";

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [movies, setMovies] = useState([]);
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    if (!token) {
      return;
    }

    fetch("https://my-flix-db-975de3fb6719.herokuapp.com/movies", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Movie data", data)
        const movieFromApi = data.map((movie) => {
          return {
            id: movie._id,
            title: movie.Title,
            image: movie.ImagePath,
            description: movie.Description,
            director: movie.Director,
            genre: movie.Genre,
            featured: movie.Featured,
          };
        });
        setMovies(movieFromApi);
      });
  }, [token]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filtered = movies.filter((movie) => {
      return (
        movie.title.toLowerCase().includes(query.toLowerCase()) ||
        movie.genre.toLowerCase().includes(query.toLowerCase()) ||
        movie.director.toLowerCase().includes(query.toLowerCase())
      );
    });
    setFilteredMovies(filtered);
  };

  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies]);


  return (
    <BrowserRouter>
      <NavigationBar
        user={user}
        query={searchQuery}
        handleSearch={handleSearch}
        onLoggedOut={() => {
          setUser(null);
          setToken(null);
          localStorage.clear();
        }}
      />
      <Row className="justify-content-md-center">
        <Routes>
          <Route
            path="/signup"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <SignupView />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <LoginView onLoggedIn={(user) => setUser(user)} />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path="/movies"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : filteredMovies.length === 0 ? (
                  <Col>The list is empty!</Col>
                ) : (
                  <Col md={8}>
                    <MovieView movies={filteredMovies} />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path="/movies/:MovieId"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <Col>The list is empty!</Col>
                ) : (
                  <>
                    {movies.map((movie) => (
                      <Col className="mb-5" key={movie._id} md={3} sm={12}>
                        <MovieCard
                          movie={movie}
                          isFavorite={user.favoriteMovies.includes(movie.title)}
                        />
                      </Col>
                    ))}
                  </>
                )}
              </>
            }
          />
          <Route
            path="/users/:Username"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : (
                  <Col md={8}>
                    <ProfileView
                      localUser={user}
                      movies={movies}
                      token={token}
                    />
                  </Col>
                )}
              </>
            }
          />
        </Routes>
      </Row>
    </BrowserRouter>
  );
};
