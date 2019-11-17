/**
 * Import Required Library
 * React, Link, Jumbotron
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';

const NotFound = () => {
  return(
    <Jumbotron>
      <h1>404!</h1>
      <p>Page Not Found. Please Check it Again.</p>
      <p><Link to="/" className="btn primary">To Pockedex</Link></p>
    </Jumbotron>
  );
}

export default NotFound;