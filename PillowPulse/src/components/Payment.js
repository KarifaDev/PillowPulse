//Payment component containing a form and a modal booking confirmation

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function Booking({ setActive }) {
  const [show, setShow] = useState(false); //handles modal

  const handleClose = () => setShow(false); //function for modal close button
  const handleShow = () => setShow(true); //function to show modal

  return (
    <div>
      {' '}
      {/*Wraps around Form and Modal*/}
      <Form>
        {' '}
        {/*Form where user can fill out payment details*/}
        <div className="heading text-center m-5">
          <h1>Pay online</h1>
        </div>
        <Button
          className="btn btn-outline-light shadow mt-1 d-block mx-auto bg-white text-black"
          onClick={() => setActive('Booking')}
        >
          {' '}
          {/*Sends user to previous page*/}
          Back
        </Button>
        <Form.Group className="mb-3" controlId="formCardNumber">
          <Form.Label>Card number</Form.Label>
          <Form.Control
            className="inputField"
            type="text"
            placeholder="xxxx xxxx xxxx xxxx"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCardholdersName">
          <Form.Label>Cardholder's name</Form.Label>
          <Form.Control
            className="inputField"
            type="text"
            placeholder="First and last name"
            required
          />
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formCardExpirationDate">
            <Form.Label>Expiration date</Form.Label>
            <Form.Control
              className="inputField"
              type="text"
              placeholder="xx/xx"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formCvvNumber">
            <Form.Label>CVV</Form.Label>
            <Form.Control
              className="inputField"
              type="text"
              placeholder="xxx"
            />
          </Form.Group>
        </Row>
        <div className="d-grid">
          {' '}
          {/*Stretches button/makes it larger*/}
          {/*When clicked, modal for booking confirmation shows*/}
          <Button
            type="button"
            className="btn-outline-primary btn-lg bg-white border-2 rounded-4 p-3 text-uppercase"
            onClick={handleShow}
            style={{
              border: 'solid #219EBA',
              color: '#219EBA',
            }}
          >
            Book trip
          </Button>
        </div>
      </Form>
      {/*Modal shows booking confirmation*/}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header
          className="border-0 text-black"
          closeButton
        ></Modal.Header>
        <Modal.Title
          className="heading text-center m-5"
          style={{ color: '#219EBA' }}
        >
          <h1>Your pillow has been booked!</h1>
        </Modal.Title>
        <Modal.Body className="fs-5 text-center">
          <FontAwesomeIcon
            icon={faCheck}
            className="ms-1"
            size="5x"
            style={{ color: '#219EBA' }}
          />
        </Modal.Body>
        <Modal.Footer className="border-0" style={{ justifyContent: 'center' }}>
          <img
            src="/pillowpulse.png"
            alt="PillowPulse logo"
            style={{
              maxWidth: '75%',
              margin: '10px 10px 50px 10px',
            }}
          />
        </Modal.Footer>
      </Modal>
    </div>
  );
}
