//Heading component showcasing a clickable PillowPulse logo

import React from 'react';

import Image from 'react-bootstrap/Image';

export default function Header({ setActive }) {
  //using props for onClick event

  return (
    <header>
      <Image
        src="/pillowpulse.png"
        alt="PillowPulse logo"
        onClick={() => setActive('Home')} //Sends user back to home page when clicking the logo
        className="pt-1 pb-1"
        style={{
          cursor: 'pointer',
        }}
        fluid
      />
    </header>
  );
}
