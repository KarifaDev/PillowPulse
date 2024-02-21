import React from 'react';

import Card from 'react-bootstrap/Card';

import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Favourites använder variabeln favouriteList för att rendera ut de resorna ur data.js som matchar med index av resan som gjorts till favourite (dvs att användaren klickat på hjärtat på en resa).

// Komponenten tar emot props från App.js.
const Favourites = ({
  trips,
  favouriteList,
  setSelectedTrip,
  setActive,
  addToFavourites,
}) => {
  const favourites = Object.keys(favouriteList); // Konstanten favourites tilldelas objektet favouriteList och görs om till en array.

  return (
    <div>
      <h1>Favourites</h1>
      {/* Om favourites är tom så finns enbart denna p-tagg som säger att listan är tom */}
      {favourites.length === 0 ? (
        <p>This list is Empty. Please add a pillow.</p>
      ) : (
        // Är listan inte tom så loopas den igenom och placeras i varsin Card. Parametern index används för att rendera ut resorna ur data.js som matchar index
        favourites.map((index) => (
          <Card
            className="border-0 shadow mt-4"
            key={index}
            onClick={() => {
              setSelectedTrip(trips[index]); // selectedTrip representerar den valda resan som öppnar upp alla detaljer om resan användaren klickat på. Klickar användaren på en av resorna så öppnas den valda resan upp.
              setActive('Trip');
            }}
            style={{ cursor: 'pointer' }}
          >
            <div className="position-relative">
              <Card.Img variant="top" src={trips[index].images[0]} />
              {/* <span>Image carousell thing</span> */}
              <div
                className="position-absolute p-2"
                style={{ top: '0', right: '0' }}
                onClick={(e) => {
                  addToFavourites(index); // Funktionen för att lägga till resa till favourites återanvänds i detta fall. Eftersom den redan klassas som favourite så tas den bort från listan.
                  e.stopPropagation(); // Då vi även har onClick på hela Card så så stoppar stopPropagation denna onClick att gå högre upp i hierarkin.
                }}
              >
                <FontAwesomeIcon
                  icon={faHeart}
                  style={{ color: '#219EBA', fontSize: '30px' }}
                  className="p-2"
                />
              </div>
            </div>
            <Card.Body>
              <Card.Title>{trips[index].location}</Card.Title>
              <div className="d-flex justify-content-between">
                <Card.Text>Nights: {trips[index].nights}</Card.Text>
                <Card.Text>Price: €{trips[index].price}</Card.Text>
              </div>
            </Card.Body>
          </Card>
        ))
      )}
    </div>
  );
};

export default Favourites;
