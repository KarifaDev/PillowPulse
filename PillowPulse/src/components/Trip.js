import React, { useState } from 'react'; // importerar react med usestate
import Button from 'react-bootstrap/Button'; // importerar bootstrapknappar
import Container from 'react-bootstrap/Container'; // importerar bootstrapcontainer
import Row from 'react-bootstrap/Row'; //importerar bootstrap row
import Col from 'react-bootstrap/Col'; //importerar bootstrap col
import Dropdown from 'react-bootstrap/Dropdown'; //importerar bootstrap dropdown
import Card from 'react-bootstrap/Card'; //importerar bootstrap card
import Carousel from 'react-bootstrap/Carousel'; //importerar bootstrap carusel
import Image from 'react-bootstrap/Image'; //importerar bootstrap bilder
import Form from 'react-bootstrap/Form';

// Här skapar vi en komponent som kallas Trip
function Trip({ trip, setActive }) {
  // Vi skapar tre lådor där vi kan hålla information med useState.
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [index, setIndex] = useState(0);

  // Här är en funktion som väljer vilket rum som är valt och sen räknar ut totala priset
  const handleRoomSelection = (roomType, roomPrice) => {
    setSelectedRoom(roomType);
    setTotalPrice(roomPrice);
  };
  // Här är en annan funktion som heter 'handleSelect'. Den tar en siffra selectedIndex.
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    // här nedan ser vi en container med allt innehåll på hotellsidan
    <Container className="mt-5">
      <Row>
        <Col>
          {' '}
          {/* Här kommer sectionen med hotelldetaljer inklusive bilder/Carousel med bootstrap*/}
          <Card className="p-3 mb-3 shadow border-0">
            {/* Carousel component */}
            <Carousel
              interval={null}
              activeIndex={index}
              onSelect={handleSelect}
              className="mb-3" // bootstrap för Carousel
            >
              {/* Genom att loopa igenom alla bilder för resan behöver vi inte skriva ut flera carousel items utan den renderas automatiskt utifrån hur många bilder som finns */}
              {trip.images.map((image, i) => (
                <Carousel.Item key={i}>
                  <Image src={image} alt={trip.name} className="img-fluid" />
                </Carousel.Item>
              ))}
            </Carousel>
            {/* Här nedan hämtar vi datan som ligger i data.js */}
            <h1 className="d-flex justify-content-center">{trip.location}</h1>
            <Card.Text>Price from: €{trip.price}</Card.Text>
            <Card.Text>Nights: {trip.nights}</Card.Text>
            <Card.Text>Rating: {trip.rating}</Card.Text>
            <h2 className="d-flex justify-content-center">{trip.name}</h2>
            <Card.Text>{trip.description}</Card.Text>
            <Card.Text>Amenities: {trip.amenities.join(', ')}</Card.Text>
            <a href="#">Restaurant menu</a>
          </Card>
          {/* Här börjar vår dropdown för olika rumsalternativ ink. bootstrap för den */}
          <Dropdown className="d-flex justify-content-center mt-5 mb-4">
            <Dropdown.Toggle
              id="room-alternatives-dropdown"
              className="btn-light text-dark"
              style={{
                border: 'solid #219EBA',
              }}
            >
              {selectedRoom ? selectedRoom : 'Room alternatives'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() =>
                  // Detta gör att datan från data.js hämtas med pris för rummet
                  handleRoomSelection('1 Singel room', trip.singelRoom)
                }
                className={selectedRoom === '1 Singel room' ? 'active' : ''}
              >
                1 Single room
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() =>
                  // Detta gör att datan från data.js hämtas med pris för rummet
                  handleRoomSelection('2 Singel rooms', 2 * trip.singelRoom)
                }
                className={selectedRoom === '2 Singel rooms' ? 'active' : ''}
              >
                2 Single rooms
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() =>
                  // Detta gör att datan från data.js hämtas med pris för rummet
                  handleRoomSelection('3 Singel rooms', 3 * trip.singelRoom)
                }
                className={selectedRoom === '3 Singel rooms' ? 'active' : ''}
              >
                3 Single rooms
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() =>
                  // Detta gör att datan från data.js hämtas med pris för rummet
                  handleRoomSelection('1 Dubbel room', trip.dubbleRoom)
                }
                className={selectedRoom === '1 Dubbel room' ? 'active' : ''}
              >
                1 Dubble room
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() =>
                  // Detta gör att datan från data.js hämtas med pris för rummet
                  handleRoomSelection(
                    '1 Singel, 1 dubbel room (three people)',
                    trip.singelAndDubbleRoom
                  )
                }
                className={
                  selectedRoom === '1 Singel, 1 dubbel room (three people)'
                    ? 'active'
                    : ''
                }
              >
                1 Single, 1 Dubble room (three people)
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() =>
                  // Detta gör att datan från data.js hämtas med pris för rummet
                  handleRoomSelection(
                    '1 Tripple room (three people)',
                    trip.trippleRoom
                  )
                }
                className={
                  selectedRoom === '1 Tripple room (three people)'
                    ? 'active'
                    : ''
                }
              >
                1 Tripple room (three people)
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Form.Group className="mb-5 mt-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Request rooms next to each other"
            />
          </Form.Group>
          {/* Här tar dropdownfunktionen slut */}
          {/* Här börjar sectionen för reviews med bootstrap */}
          <h3>Reviews </h3>
          <Card className="p-3 mb-3 shadow border-0">
            <Card.Title style={{ color: '#219EBA' }}>
              {
                trip.reviews
                  .userName /* Hämtar namnet på den som skrivit recensionen från data.js*/
              }
            </Card.Title>
            <Card.Text>
              {trip.reviews.review /* Hämtar recensionen från data.js*/}
            </Card.Text>
          </Card>
          <div className="total-price text-center p-2">
            Total Price: €{totalPrice /*Denna funktionen räknar ut ttalpriset*/}
          </div>
          <div className="d-grid">
            {/* Här kommer vår knapp med tillhörande bootsrap och våra färger för appen */}
            <Button
              className="btn-outline-primary btn-lg bg-white border-2 rounded-4 p-3 text-uppercase"
              style={{
                border: 'solid #219EBA',
                color: '#219EBA',
              }}
              onClick={
                () =>
                  setActive(
                    'Booking'
                  ) /*Detta gör att man kommer till booking när man klickar på knappen*/
              }
            >
              Book your pillow
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Trip; // Exporterar trip.js
