import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setReservedFlights } from '../redux/flights/flightsSlice';
import AddFlight from './AddFlight';

const Reservations = () => {
  const dispatch = useDispatch();
  const { reservedFlights } = useSelector((store) => store.flights);

  useEffect(() => {
    if (reservedFlights.length === 0) {
      const data = JSON.parse(localStorage.getItem('reservedFlights'));
      if (data) data.map((flight) => dispatch(setReservedFlights(flight)));
    }
  }, [reservedFlights, dispatch]);

  return (
    <div className="reservations">
      <AddFlight />
      <h2>Reserved Destinations</h2>
      <hr />
      <div className="reserved-flights">
        {reservedFlights.map((reservation) => (
          <div className="reserved-flight" key={reservation.id}>
            <table>
              <tr>
                <td>
                  <h3>Name:</h3>
                  {' '}
                </td>
                <td><h3>{reservation.name}</h3></td>
              </tr>
              <tr>
                <td><h3>From:</h3></td>
                <td><h3>{reservation.city}</h3></td>
              </tr>
              <tr>
                <td><h3>To:</h3></td>
                <td><h3>{reservation.flight}</h3></td>
              </tr>
              <tr>
                <td><h3>Date of Departure:</h3></td>
                <td><h3>{reservation.date}</h3></td>
              </tr>
            </table>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Reservations;
