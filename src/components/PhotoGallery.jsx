import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import './PhotoG.css';

const PhotoGallery = () => {
  // Define an array of objects with image URLs and captions
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1498998754966-9f72acbc85b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      caption: 'Lavender Shine',
    },
    {
      src: 'https://images.unsplash.com/photo-1511800453077-8c0afa94175f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      caption: 'Purple Glair',
    },
    {
      src: 'https://images.unsplash.com/photo-1554668048-5055c5654bbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      caption: 'Purple Hue',
    },
    // Add more images and captions as needed
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Container>
      <Row>
        {images.map((image, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <div
              className="gallery-item"
              onClick={() => openModal(index)}
            >
              <img src={image.src} alt={image.caption} />
              <div className="caption">{image.caption}</div>
            </div>
          </Col>
        ))}
      </Row>
      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Body>
          <img
            src={images[selectedImageIndex].src}
            alt={images[selectedImageIndex].caption}
            className="img-fluid"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default PhotoGallery;
