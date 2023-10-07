import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from 'react-bootstrap';
import '../App.css';

function Cover() {
  return (
    <div className="cover-container">
      <div className="cover-background">
        {/* Your background image */}
      </div>
      <div className="cover-content">
        <Container className="text-center">
          <h1 className="display-4">Cover Your Page with what Matters</h1>
          <p className="lead">This is a one-page template for building simple and beautiful home pages from Rafael Moreno .</p>
          <Link to="/home" className="btn btn-primary btn-lg">
            Enter
          </Link>
        </Container>
      </div>
    </div>
  );
}

export default Cover;
