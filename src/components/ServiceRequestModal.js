// src/components/ServiceRequestModal.js
import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function ServiceRequestModal({
  show,
  handleClose,
  serviceType,
  handleSubmit,
  formData,
  handleChange,
}) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Apply for {serviceType}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description / Notes</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Submit Request
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
