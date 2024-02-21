import React from 'react'; // importerar react 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';// importerar vår font awesome 
import { // ikonerna genom font awesome i navigationen
  faHome,
  faBriefcase,
  faHeart,
  faUser,
} from '@fortawesome/free-solid-svg-icons'; // källan av våra ikoner 
/* skapar en funkton med props med style för att få in våra färger och göra så att den fungerar för alla mobiler*/
function Nav(props) {
  const navStyle = {
    backgroundColor: '#219EBA',
    width: '100%',
    position: 'fixed',
    bottom: 0,
    left: 0,
  };
/* Här nedan kommer allt vårt innehåll*/
  return (
    /* Skapar navigationen med nav och list. Med återkommande bootstrap för varje listitem.*/
    <nav style={navStyle}> 
      <ul
          className="nav d-flex justify-content-around align-items-center mw-100 mh-20"
      >
        <li
          className="nav-item text-center"
          onClick={(e) => props.handleActive('Home')}
        >
          <a
            className="nav-link text-white d-flex flex-column align-items-center"
            href="#"
          > 
            <FontAwesomeIcon // Här är våra font awesome ikoner med bootstrap
              icon={faHome}
              className="fs-1"
            />
            <span>Home</span>
          </a>
        </li>
        <li className="nav-item text-center">
          <a
            className="nav-link text-white d-flex flex-column align-items-center"
            href="#"
          >
            <FontAwesomeIcon  // Här är våra font awesome ikoner med bootstrap
              icon={faBriefcase}
              className="fs-1"
            />
            <span>My Trips</span> 
          </a>
        </li>
        <li
          className="nav-item text-center"
          onClick={(e) => props.handleActive('Favourites')}
        >
          <a
            className="nav-link text-white d-flex flex-column align-items-center"
            href="#"
          >
            <FontAwesomeIcon // Här är våra font awesome ikoner med bootstrap
              icon={faHeart}
              className="fs-1"
            />
            <span>Favorites</span>
          </a>
        </li>
        <li
          className="nav-item text-center"
          onClick={(e) => props.handleActive('Account')} // Tar en till account/inloggning genom att anropa funktionen handleActive.
        >
          <a
            className="nav-link text-white d-flex flex-column align-items-center"
            href="#"
          >
            <FontAwesomeIcon // Här är våra font awesome ikoner med bootstrap
              icon={faUser}
              className="fs-1"
            />
            <span>Account</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
// exporterar NAV
export default Nav;
