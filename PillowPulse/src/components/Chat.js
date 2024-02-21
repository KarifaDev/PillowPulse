import React, { useState } from 'react';

// Font Awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCommentDots,
  faUser,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

// Bootstrap imports
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

// Chat är tänkt att fungera som en intern chatfunktion som användaren ska kunna använda sig av vid funderingar och frågor. Komponenten renderar ut två olika delar konditionellt. I startsläget ska enbart en ikon renderas. När denna har tryckts så stängs den och en chatruta öppnas. På samma sätt kan man även stänga ner den igen.
const Chat = () => {
  // En state variable som används för att hantera öppning samt stängning av chatrutan. Den är satt till false i början. När Chatikonen tryckts så ändras den till true.
  const [btnClicked, setBtnClicked] = useState(false);

  return (
    <>
      {btnClicked ? (
        // Om ikonen (faCommentDots) tryckts, dvs om variabeln btnClicked=true så renderas denna sektion där användaren ska kunna chatta med personal eller chatbot.
        <div
          className="position-fixed end-0"
          style={{ width: '75%', bottom: '70px' }}
        >
          <div
            className="mb-4 rounded-3 shadow d-flex align-content-between flex-wrap"
            style={{ background: '#D9D9D9', minHeight: '60vh' }}
          >
            <div className="p-3" style={{ minWidth: '100%' }}>
              <div className="d-flex justify-content-between">
                <FontAwesomeIcon icon={faUser} className="mb-2 fs-3" />
                <FontAwesomeIcon
                  icon={faXmark}
                  className="fs-1 p-1"
                  onClick={(e) => setBtnClicked(false)}
                  // Denna ikon representerar ett kryss som ska användas för att stänga ner chatten. Vid klick körs funktionen setBtnClicked med false som argument och ändrar därmed btnClicked till false. På så vis stängs denna sektion ner.
                />
              </div>
              <p
                // En statisk text som representerar hur konversationen initeras.
                style={{ background: 'white', width: '60%' }}
                className="rounded-3 p-2"
              >
                Hi! What can I do for you today?
              </p>
            </div>
            <InputGroup className="mb-3 ps-3 pe-3">
              {/* Input där användaren ska skriva in sin fundering */}
              <Form.Control
                className="p-3"
                placeholder="..."
                aria-label="Write us"
                aria-describedby="basic-addon2"
              />
            </InputGroup>
          </div>
        </div>
      ) : (
        // Denna div renderas om btnClicked=false. Alltså är detta den första vyn av komponenten.
        <div
          className="d-flex justify-content-end p-3 position-fixed end-0"
          style={{
            color: '#219EBA',
            fontSize: '50px',
            margin: '10px',
            bottom: '70px',
          }}
        >
          <FontAwesomeIcon
            // Denna ikon är "chatbubblan" som användaren ska klicka på för att öppna chatrutan.
            icon={faCommentDots}
            onClick={(e) => setBtnClicked(true)} // När den har tryckts körs funktionen setBtnClicked med true som argument vilket sätter den till true och ändrar vyn på komponenten enligt beskrivningen ovan.
          />
        </div>
      )}
    </>
  );
};

export default Chat;
