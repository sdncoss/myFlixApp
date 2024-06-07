import React, { useState } from "react";
import { Navbar, Container, Nav, Form, FormControl, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { SearchBar } from "../search-bar/search-bar";

export const NavigationBar = ({ user, onLoggedOut, query, handleSearch }) => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">MyFlix</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!user ? (
              <>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/">Movies</Nav.Link>
                <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                <Nav.Link onClick={onLoggedOut}>Logout</Nav.Link>
              </>
            )}
          </Nav>
          <Form className="d-flex">
            <SearchBar query={query} handleSearch={handleSearch} />

          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

NavigationBar.propTypes = {
  user: PropTypes.object,
  onLoggedOut: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired
};