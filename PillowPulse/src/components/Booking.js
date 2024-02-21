//Booking component containing a booking form

import React from 'react'; // Importerar bootstrap
import Button from 'react-bootstrap/Button';// Importerar bootstrapknapp
import Form from 'react-bootstrap/Form';// Importerar bootstrapformulär
import Col from 'react-bootstrap/Col';// Importerar bootstrapcol
import Row from 'react-bootstrap/Row';// Importerar bootstraprow

export default function Booking({ setActive }) {
  return (
    <Form>
      <div className="heading text-center m-5">
        <h1>Fill in your details to book your trip</h1>
      </div>

      {/*Button brings user back to previous page*/}
      <Button
        className="btn btn-outline-light shadow mt-1 d-block mx-auto bg-white text-black"
        onClick={() => setActive('Trip')}
      >
        Back
      </Button>

      {/*The booking form*/}
      <Form.Group className="mb-3" controlId="formFullName">
        <Form.Label>Full name</Form.Label>
        <Row>
          <Col>
            <Form.Control
              required
              className="inputField"
              type="text"
              placeholder="First name"
            />
          </Col>
          <Col>
            <Form.Control
              required
              className="inputField"
              type="text"
              placeholder="Last name"
            />
          </Col>
        </Row>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPhoneNumber">
        <Form.Label>Phone number</Form.Label>
        <Form.Control
          className="inputField"
          type="text"
          placeholder="xxx xxx-xxxx"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          className="inputField"
          type="email"
          placeholder="example@example.com"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control
          className="inputField"
          type="text"
          placeholder="Address line 1"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formAddress2">
        <Form.Control
          className="inputField"
          type="text"
          placeholder="Address line 2"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPostalCodeAndCity">
        <Row>
          <Col>
            <Form.Control
              className="inputField"
              type="text"
              placeholder="Postal code"
              required
            />
          </Col>
          <Col>
            <Form.Control
              className="inputField"
              type="text"
              placeholder="City"
              required
            />
          </Col>
        </Row>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formTextArea">
      <Form.Label>Comments</Form.Label>
        <Form.Control
          className="inputField"
          type="text"
          placeholder="E.g. require gluten free diet"
        />
      </Form.Group>

      <div className="d-grid">
        {' '}
        {/*Stretches button/makes it larger*/}
        {/*When clicked, modal for booking confirmation shows*/}
        <Button
          type="button"
          className="btn-outline-primary btn-lg bg-white border-2 rounded-4 p-3 text-uppercase"
          onClick={() => setActive('Payment')}
          style={{
            border: 'solid #219EBA',
            color: '#219EBA',
          }}
        >
          Book trip
        </Button>
      </div>
    </Form>
  );
}
