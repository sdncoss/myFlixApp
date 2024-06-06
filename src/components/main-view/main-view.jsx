import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view"
import { SignupView } from "../signup-view/signup-view";
import { Row, Col } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NavigationBar } from "../navigation-bar/navigation-bar";
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
      console.log("No token, skipping fetch.");
      return;
    }

    console.log("Fetching movies with token:", token);

    fetch("https://my-flix-db-975de3fb6719.herokuapp.com/movies", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Movie data", data)
        const moviesFromApi = data.map((movie) => {
          return {
            id: movie._id,
            title: movie.Title,
            image: movie.ImagePath,
            description: movie.Description,
            director: movie.Director?.Name || 'Unknown Director', // Safe access with fallback
            bio: movie.Director?.Bio || 'Uknown Bio', //Safe access with fallback
            birthyear: movie.Director?.Birthyear || 'Unknown Birthyear',
            deathyear: movie.Director?.Deathyear || 'Unknown Deathyear',
            genre: movie.Genre?.Name || 'Unknown Genre', // Safe access with fallback
            featured: movie.Featured,
          };
        });
        setMovies(moviesFromApi);
        setFilteredMovies(moviesFromApi);
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
              user ? <Navigate to="/" /> : <Col md={5}><SignupView /></Col>
            }
          />
          <Route
            path="/login"
            element={
              user ? <Navigate to="/" /> : <Col md={5}><LoginView onLoggedIn={(user, token) => { setUser(user); setToken(token); }} /></Col>
            }
          />
          <Route
            path="/"
            element={
              !user ? <Navigate to="/login" replace /> : (
                filteredMovies.length === 0 ? <Col>The list is empty!</Col> : (
                  <Row>
                    {filteredMovies.map((movie) => (
                      <Col className="mb-5" key={movie.id} md={3} sm={12}>
                        <MovieCard
                          movie={movie}
                          isFavorite={user.favoriteMovies && Array.isArray(user.favoriteMovies) && user.favoriteMovies.includes(movie.title)}
                        />
                      </Col>
                    ))}
                  </Row>
                )
              )
            }
          />
          <Route
            path="/movies/:movieId"
            element={
              !user ? <Navigate to="/login" replace /> : (
                filteredMovies.length === 0 ? <Col>The list is empty!</Col> : (
                  <Col md={8}><MovieView movies={filteredMovies} /></Col>
                )
              )
            }
          />
          <Route
            path="/profile"
            element={
              !user ? <Navigate to="/login" replace /> : (
                <Col md={8}>
                  <ProfileView localUser={user} movies={filteredMovies} token={token} />
                </Col>
              )
            }
          />
        </Routes>
      </Row>
    </BrowserRouter>
  );
};