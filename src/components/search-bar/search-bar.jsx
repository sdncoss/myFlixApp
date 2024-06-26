import React from "react";
import { Form, Row, Button } from "react-bootstrap";
import PropTypes from "prop-types";

export const SearchBar = ({ query, handleSearch }) => {
  return (
    <Row>
      <Form.Control
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search"
        className="sm-2 mb-3"
      />
      <Button variant="primary">Search</Button>
    </Row>
  );
};
SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired
};