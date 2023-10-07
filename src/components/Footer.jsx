import React from 'react';
import Container from 'react-bootstrap/Container';

function Footer() {
  return (
    <footer className="bg-primary text-light py-3">
      <Container>
        <p className="text-center mb-0">
          &copy; {new Date().getFullYear()} Your Company Name
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
