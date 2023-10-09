import React from 'react';
import { Container, Row, Col, Card, Nav, Table } from 'react-bootstrap';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';

const AboutMe = () => {
  return (
    <Container>

      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <h2>About Me</h2>
              <p>
                I’m Rafael Moreno, a dedicated developer with a deep passion for full-stack implementations, focusing on React and HTML.
              </p>
              <p>
                My journey began with a fascination for creating impactful user experiences and diving deep into back-end intricacies. This propelled me to specialize in React, complementing it with solid HTML knowledge.
              </p>
              <p>
                Over the years, I've transformed concepts into reality for numerous clients, always aiming for scalable and maintainable solutions.
              </p>
              <p>
                Here are some of the milestones and projects I’m particularly proud of…
              </p>
              <img src="path_to_Rafael_Moreno_Headshot.jpg" alt="Rafael Moreno - Headshot" />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <Nav variant="tabs" defaultActiveKey="#projects">
            <Nav.Item>
              <Nav.Link href="#projects">My Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#technologies">Technologies</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#press">Press</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          {/* Your main content goes here, for example, details about 'My Projects' */}
        </Col>

        <Col lg={6}>
          <Card>
            <Card.Body className="social-media-section">
              <h2>Social Media</h2>
              <div className="social-media-list">
                <div className="social-media-item">
                  <FaLinkedin className="social-media-icon" />
                  <a href="https://www.linkedin.com/in/rafael-moreno-38b278272/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
                <div className="social-media-item">
                  <FaTwitter className="social-media-icon" />
                  <a href="https://twitter.com/no_rest4D_wicke" target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
                <div className="social-media-item">
                  <FaGithub className="social-media-icon" />
                  <a href="https://github.com/RAZAGHUL123" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body className="social-media-section">
              <h2>Favorite Games</h2>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Game</th>
                    <th>Console</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Bioshock</td>
                    <td>PS4</td>
                  </tr>
                  <tr>
                    <td>Last of Us</td>
                    <td>PS4</td>
                  </tr>
                  <tr>
                    <td>Fallout 4</td>
                    <td>PS4</td>
                  </tr>
                  <tr>
                    <td>Borderlands 2</td>
                    <td>PS4</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
