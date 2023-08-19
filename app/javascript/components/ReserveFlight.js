import React from 'react';
import { useLocation } from 'react-router-dom';

function ReserveFlight() {
  const location = useLocation();
  const { flightInfo } = location.state || {}; // Access flightInfo from state

  return (
    <div>
      <h2>Reserve Flight</h2>
      {flightInfo && (
        <div>
          <p>Flight Name: {flightInfo.name}</p>
          <p>Base Price: {flightInfo.base_price}</p>
          {/* Display other flight information here */}
        </div>
      )}
    </div>
  );
}

export default ReserveFlight;
