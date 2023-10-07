import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Projects from './Projects'; // Import the Projects component
import './Home.css'; // Import your custom CSS for Home

const Home = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col md={4}>
          {/* Your profile card */}
          <Card className="profile-card">
            <Card.Img
              src="https://images.unsplash.com/photo-1510987836583-e3fb9586c7b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" // Replace with your image URL
              alt="Profile Image"
              className="profile-image"
            />
            <div className="overlay"></div>
            <Card.Body>
              <Card.Title className="text-white">Rafael Moreno</Card.Title>
              <Card.Text className="text-white">
                Hello! I'm a passionate web developer with expertise in JavaScript
                and React. I love creating beautiful and functional websites that
                make a difference.
              </Card.Text>
              <Button variant="light">View Profile</Button>
            </Card.Body>
          </Card>
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
