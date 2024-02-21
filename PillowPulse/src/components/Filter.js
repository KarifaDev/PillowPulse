import React, { useState } from 'react'; // importerar react med usestate

const Filter = ({ filterTrips }) => {
  // Skapar en state-variabel 'filters' för att hantera filter
  const [filters, setFilters] = useState({
    familyFriendly: false,
    pool: false,
    checkIn: false,
    airportTransfer: false,
    wifi: false,
  });

  // Funktion för att växla filter
  const toggleFilter = (filter) => {
    setFilters({
      ...filters,
      [filter]: !filters[filter],
    });
  };

  // Funktion för sökknappen så att filtreringen sker när man klickar på knappen
  const applyFilters = () => {
    filterTrips(filters);
  };

  // State-variabel för drop down
  const [isExpanded, setIsExpanded] = useState(false);
  // Här nedan kommer vårt innehåll på Filter. 
  return (
    <div className="container mt-6 d-flex justify-content-center">
      <div
        className="custom-card m-1 shadow"
      >
        <div className="dropdown"> 
          <button // Här här vår knapp som ligger innuti dropdown-funktionen 
            className={`btn btn-light dropdown-toggle ${
              isExpanded ? 'show' : '' // IsExpanded gör att man kan öppna och stänga filtermenyn
            }`}
            type="button"
            id="filterDropdown"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded={isExpanded} // IsExpanded gör att man kan öppna och stänga filtermenyn
            onClick={() => setIsExpanded(!isExpanded)} // IsExpanded gör att man kan öppna och stänga filtermenyn
          >
            Filter
          </button>
          <div
            className={`dropdown-menu ${isExpanded ? 'show' : ''}`} // IsExpanded gör att man kan öppna och stänga filtermenyn
            aria-labelledby="filterDropdown"
            style={{ // Stil för dropdown-menyn
              width: 'auto',
              minWidth: '200px',
              textAlign: 'left',
              padding: '20px',
              marginLeft: '-55px',
            }}
          >
           <style>
              {`
                /* Anpassad CSS-stil för checkboxar så de får vår blåa färg */
                .form-check-input:checked {
                  background-color: #219EBA;
                  border-color: #219EBA;
                }
              `}

            </style>
            <div className="form-check">
              <input // Såhär ser de olika filteralternativen ut och koden är identisk för alla alternativ.
                type="checkbox"
                className="form-check-input"
                id="familyFriendly"
                checked={filters.familyFriendly} // när man klickar här "togglas" datan i data.js
                onChange={() => toggleFilter('familyFriendly')}
              />
              <label className="form-check-label" htmlFor="familyFriendly">
                Family Friendly
              </label>
            </div>
            <div className="form-check">
              <input // Här börjar nästa filteralternativ. 
                type="checkbox"
                className="form-check-input"
                id="pool"
                checked={filters.pool}
                onChange={() => toggleFilter("pool")}
              />
              <label className="form-check-label" htmlFor="pool">
                Pool
              </label>
            </div>
            <div className="form-check">
              <input  // Här börjar nästa filteralternativ. 
                type="checkbox"
                className="form-check-input"
                id="checkIn"
                checked={filters.checkIn}
                onChange={() => toggleFilter("checkIn")}
              />
              <label className="form-check-label" htmlFor="checkIn">
                24/7 Check In
              </label>
            </div>
            <div className="form-check">
              <input  // Här börjar nästa filteralternativ. 
                type="checkbox"
                className="form-check-input"
                id="airportTransfer"
                checked={filters.airportTransfer}
                onChange={() => toggleFilter('airportTransfer')}
              />
              <label className="form-check-label" htmlFor="airportTransfer">
                Airport Transfer
              </label>
            </div>
            <div className="form-check">
              <input  // Här börjar nästa filteralternativ. 
                type="checkbox"
                className="form-check-input"
                id="wifi"
                checked={filters.wifi}
                onChange={() => toggleFilter('wifi')}
              />
              <label className="form-check-label" htmlFor="wifi">
                Wi-Fi
              </label>
            </div>
            <button // Här är vår knapp för att filter skall appliceras när man klickar på Search
              className="btn btn-outline-light shadow mt-3 d-block mx-auto"
              onClick={applyFilters}
              style={{ color: 'black' }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
// exporterar Filter
export default Filter;
