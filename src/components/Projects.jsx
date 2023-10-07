// Projects.js
import React from 'react';
import { Carousel } from 'react-bootstrap'; // Import the Carousel component from react-bootstrap

const Projects = () => {
  return (
    <Carousel>
      {/* Add Carousel items with project images and titles */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
          alt="Project 1"
        />
        <Carousel.Caption>
          <h3>Project 1</h3>
          <p>Description of Project 1</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Project 2"
        />
        <Carousel.Caption>
          <h3>Project 2</h3>
          <p>Description of Project 2</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Project 3"
        />
        <Carousel.Caption>
          <h3>Project 3</h3>
          <p>Description of Project 3</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Add more Carousel items for your projects */}
    </Carousel>
  );
}

export default Projects;
