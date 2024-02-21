import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// TripList är en komponent som renderar ut resorna. I startläget renderas alla resor ut, men om användaren gjort en sökning med hjälp av sökfunktionen uppdateras listan och ändrar därmed TripLists innehåll. Den tar props från App.js.
function TripList({
  setSelectedTrip,
  tripList,
  addToFavourites,
  favourites,
  setActive,
}) {
  return (
    <>
      {/* Listan loopas igenom för att få ut varje resa i egen komponent */}
      {tripList.map((trip, index) => (
        <div
          key={index}
          onClick={() => {
            setSelectedTrip(trip); // Klickar man på Card så visas mer information om en resa.
            setActive('Trip'); // active sätts till trip. Detta behövs för att ändra vyn.
          }}
          style={{ cursor: 'pointer' }}
        >
          <Card className="border-0 shadow mt-4 p-0">
            <div className="position-relative">
              <Card.Img variant="top" src={trip.images[0]} alt={trip.name} />
              <div
                className="position-absolute p-2"
                style={{ top: '0', right: '0' }}
                onClick={(e) => {
                  addToFavourites(index); // Klickar man på denna div så läggs resan till som favorit. Funktionen addToFavourites i App.js invokeras och passerar in index av den valda resan som argument.
                  e.stopPropagation(); // Då vi även har onClick på hela Card så så stoppar stopPropagation denna onClick att gå högre upp i hierarkin.
                }}
              >
                {/* Ikonen faHeart renderas ut villkorligt. Om resan redan lagts till i favourite så får får den en färg, annars är den vit */}
                {favourites[index] ? (
                  <FontAwesomeIcon
                    icon={faHeart}
                    style={{ color: '#219EBA', fontSize: '30px' }}
                    className="p-2"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faHeart}
                    style={{ color: 'white', fontSize: '30px' }}
                    className="p-2"
                  />
                )}
              </div>
            </div>
            <Card.Body>
              <Card.Title>{trip.location}</Card.Title>
              <div className="d-flex justify-content-between">
                <Card.Text>Nights: {trip.nights}</Card.Text>
                <Card.Text>Price: €{trip.price}</Card.Text>
              </div>
            </Card.Body>
          </Card>
        </div>
      ))}
    </>
  );
}

export default TripList;
