import React, { useState } from 'react';

import './style.css'; // Allmän stylesheet

// React-bootstrap imports
import Booking from './components/Booking';
import Payment from './components/Payment'; // Importera Payment-komponenten
import Header from './components/Header';
import Chat from './components/Chat';
import Nav from './components/Nav';
import SearchBar from './components/SearchBar';
import TripList from './components/TripList';
import Filter from './components/Filter';
import Favourites from './components/Favourites';
import Trip from './components/Trip';
import Account from './components/Account';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css'; // Länkad bootstrap stylesheet.

import { getData } from './data'; // Importerar funktionen getData från data.js.

export default function App() {
  const [active, setActive] = useState('Home'); // Denna state används för att rendera komponenter villkorligt beroende på vilken knapp man tryckt på i menyn.
  const allTrips = getData(); // Hämtar data från data.js.
  const [query, setQuery] = useState(''); // Sparar input value från sökfunktionen (i where to?).
  const [filteredTrips, setFilteredTrips] = useState(allTrips); // Sparar en filtrerad lista av allTrips. För att sökfunktionen ska fungera används denna.
  const [favourites, setFavourites] = useState({}); // Objekt som sparar alla resor som gillats.
  const [selectedTrip, setSelectedTrip] = useState(null); // Sparar vald resa.

  // Funktion som sätter active till önskat värde. Den tar en texsträng från Nav som skickas in för visa den sidan som klickats på.
  const handleActive = (e) => {
    setActive(e); // setActive tar emot sträng och sätter in den.
    setFilteredTrips(allTrips); // Listan med hotell nollställer sökningar och filter för att återställa vyn.
  };

  // Funktionen addToFavourites används för att hantera vilka resor som har lagts till som favoriter. Den tar emot argument från TripList eller Favourites.
  const addToFavourites = (trip) => {
    let tripAdded = { ...favourites }; // Variabel som tilldelas värdet favourites. Den används för att lägga till eller ta bort som favorit och tar enbart emot true eller false.

    if (tripAdded[trip] != true) {
      // Om resan inte redan lagts till som favorit så läggs den till.
      tripAdded[trip] = true; // Genom att tilldela värdet true har den lagts till som favorit.
    } else {
      tripAdded[trip] = false; // Om den redan lagts till som favorit så tas den bort som favorit.
      delete tripAdded[trip]; // Här tas den bort.
    }
    setFavourites(tripAdded); // favourites får värdet av tripAdded.
  };

  // FilterTrips används för att filtrera resorna som renderas i TripList. Den tar emot filter-kriterie från Filter och ändrar listan "filteredTrips".
  function filterTrips(filters) {
    let filtered = allTrips.filter((trip) => {
      // Dessa if-satser används för att se över vilka resor som sedan kommer komma upp utifrån val. Den tar emot de olika valen från filter och söker efter hotell med matchande attribut.
      if (
        filters.familyFriendly &&
        !trip.amenities.includes('family friendly')
      ) {
        return false;
      }
      if (filters.pool && !trip.amenities.includes('pool')) {
        return false;
      }
      if (filters.checkIn && !trip.amenities.includes('24 hour check-in')) {
        return false;
      }
      if (
        filters.airportTransfer &&
        !trip.amenities.includes('airport transfer')
      ) {
        return false;
      }
      if (filters.wifi && !trip.amenities.includes('wifi')) {
        return false;
      }
      return true;
    });
    setFilteredTrips(filtered); // filteredTrips får sedan resultatet av filtreringen.
  }

  // Komponenterna inne i Container som alltid visas är Header, Chat och Nav. De andra komponenterna renderas villkorligt utifrån värdet av variabeln active.
  return (
    <>
      <Container style={{ marginBottom: '100px' }}>
        <Header setActive={setActive} />
        {active === 'Home' ? (
          <>
            <SearchBar
              setQuery={setQuery}
              setFilteredTrips={setFilteredTrips}
              allTrips={allTrips}
              query={query}
            />
            <Filter filterTrips={filterTrips} />
            <TripList
              tripList={filteredTrips}
              addToFavourites={addToFavourites}
              favourites={favourites}
              setSelectedTrip={setSelectedTrip}
              setActive={setActive}
            />
          </>
        ) : (
          <></>
        )}

        {active === 'Trip' ? (
          <Trip trip={selectedTrip} setActive={setActive} />
        ) : (
          <></>
        )}
        {active === 'Booking' ? <Booking setActive={setActive} /> : <></>}
        {active === 'Payment' ? <Payment setActive={setActive} /> : <></>}
        {active === 'Favourites' ? (
          <Favourites
            favouriteList={favourites}
            trips={allTrips}
            addToFavourites={addToFavourites}
            setSelectedTrip={setSelectedTrip}
            setActive={setActive}
          />
        ) : (
          <></>
        )}
        {active === 'Account' ? <Account /> : <></>}

        <Chat />
        <Nav handleActive={handleActive} />
      </Container>
    </>
  );
}
