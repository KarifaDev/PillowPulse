import React from 'react';

// React bootstrap imports.
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

// Importerar egen css-fil då datumfältet krävde mycket css.
import './SearchBar.css';

// FontAwesome imports.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';

// Komponenten innehåller tre InputGroups och en knapp. Komponenten tar emot propsen setQuery, setFilteredTrips, allTrips, query. Komponentens uppgift är att ta emot användarens input och hantera den för att manipulera resultaten i komponenten TripList.
const SearchBar = ({ setQuery, setFilteredTrips, allTrips, query }) => {
  // Funktion som används för att jämföra användarens input i "Where to?" med resornas "location", dvs vilken stad. Funktionen körs när knappen "Search" klickats.
  const renderSearchedTrips = () => {
    // filtered filtrerar alla resors "location" och jämför med användarens input (query).
    const filtered = allTrips.filter(
      (trip) => trip.location.toLowerCase().includes(query) // Letar igenom attributet "location" för att hitta en matchning med query. toLowerCase används för att göra all text till gemener och därmed undvika problem.
    );
    setFilteredTrips(filtered); // Filtreringen läggs in i filteredTrips.
  };

  // Egen CSS
  const searchBarIcon = {
    padding: '2px',
    fontSize: '25px',
  };

  // Egen CSS
  const datePicker = {
    padding: '-10px',
    fontSize: '20px',
  };

  return (
    <div className="mt-4 mb-4">
      {/* Första sökfätet som tar emot en textsträng */}
      <InputGroup className="mb-3 shadow search-field rounded-5">
        <InputGroup.Text className="bg-white border-0 rounded-5">
          <FontAwesomeIcon icon={faMagnifyingGlass} style={searchBarIcon} />
        </InputGroup.Text>
        <Form.Control
          className="border-0 rounded-5 form-control"
          placeholder="Where to?"
          onChange={(e) => setQuery(e.target.value.toLowerCase())} // Vid eventet onChange sätts värdet av variabeln query till e.target i lower case.
          style={{ fontSize: '20px' }}
        />
      </InputGroup>

      {/* Fälter tar emot två datum, ett från och ett till. Dock görs inget med valda datumen vilket innebär att den inte har någon funktionalitet förutom att välja datum */}
      <InputGroup className="mb-3 shadow search-field rounded-5 black">
        <div className="date-picker start-date" tabIndex="0">
          <input type="date" required />
          <div className="placeholder"></div>
        </div>
        <div className="date-picker end-date" tabIndex="0">
          <input type="date" required />
          <div className="placeholder"></div>
        </div>
      </InputGroup>

      {/* Med form select väljer användaren hur många barn och myndiga som reser. Även denna har ingen funktionalitet men det är möjligt att välja olika alternativ. */}
      <InputGroup className="mb-3 shadow search-field rounded-5">
        <InputGroup.Text
          id="basic-addon1"
          className="bg-white border-0 rounded-5"
        >
          <FontAwesomeIcon icon={faUser} style={searchBarIcon} />
        </InputGroup.Text>
        <Form.Select
          className="border-0 rounded-5 form-select"
          aria-describedby="basic-addon1"
          style={{ fontSize: '20px' }}
        >
          <option>Adults</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </Form.Select>
        <Form.Select
          style={{ fontSize: '20px' }}
          className="border-0 rounded-5"
          placeholder="Where to?"
          aria-describedby="basic-addon1"
        >
          <option>Children</option>
          <option value="1">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="3">4 </option>
        </Form.Select>
      </InputGroup>

      {/* Knapp som kör funtionen renderSearchedTrips (funktionen högst upp i komponenten)*/}
      <Button
        className="btn btn-outline-light btn-light shadow mt-3 d-block btn-lg"
        onClick={renderSearchedTrips} // Funtione
        style={{ color: 'black' }}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
