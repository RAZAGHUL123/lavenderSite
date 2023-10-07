import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'; // Example for social media icons
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css'; // You can create a custom CSS file for styling

const About = () => {
    return (
      <Container>
        <Row>
          <Col lg={6}>
            <Card>
              <Card.Body>
                <h2>About Me</h2>
                <p>
                  Insert your introduction and information about yourself here.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6}>
            <Card>
              <Card.Body>
                <h2>Social Media</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="https://www.linkedin.com/in/rafael-moreno-38b278272/" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin /> LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/no_rest4D_wicke" target="_blank" rel="noopener noreferrer">
                      <FaTwitter /> Twitter
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/RAZAGHUL123" target="_blank" rel="noopener noreferrer">
                      <FaGithub /> GitHub
                    </a>
                  </li>
                  {/* Add more social media links as needed */}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  };
  
  export default About;
  