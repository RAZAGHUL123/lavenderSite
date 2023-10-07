import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Projects from './Projects'; // Import the Projects component

const Home = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col md={4}>
          {/* Your profile card */}
        </Col>
        <Col md={8}>
          <h2>Rafael Moreno</h2>
          <p>
            Hello! I'm a passionate web developer with expertise in JavaScript
            and React. I love creating beautiful and functional websites that
            make a difference.
          </p>
          <h2>Skills</h2>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>HTML/CSS</li>
            <li>Bootstrap</li>
            <li>Node.js</li>
            {/* Add more skills */}
          </ul>
          <h2>Contact</h2>
          <p>
            Feel free to connect with me on LinkedIn or drop me an email at{' '}
            <a href="mailto:your@email.com">your@email.com</a>.
          </p>
        </Col>
      </Row>
      {/* Include the Projects component */}
      <Projects />
    </Container>
  );
}

export default Home;
