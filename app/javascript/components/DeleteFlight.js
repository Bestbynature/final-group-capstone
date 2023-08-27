import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFlight, fetchFlights } from '../redux/flights/flightsSlice';
import AddFlight from './AddFlight';

const DeleteFlight = () => {
  const dispatch = useDispatch();
  const flights = useSelector((state) => state.flights.flights);

  const [deletedFlights, setDeletedFlights] = useState([]);
  const deletedFlightRef = useRef(null);

  const handleDelete = (flightId) => {
    const flightToDelete = flights.find((flight) => flight.id === flightId);
    dispatch(deleteFlight(flightId));
    if (flightToDelete) {
      deletedFlightRef.current = flightToDelete;
      setDeletedFlights([...deletedFlights, flightToDelete]);
    }
  };

  useEffect(() => {
    if (flights.length === 0) {
      dispatch(fetchFlights());
    }
  }, [dispatch, flights.length]);

  return (
    <div className="delete-flight">
      <AddFlight />
      {deletedFlights.length > 0 && (
        <ul>
          <h2>Deleted Flights</h2>
          {deletedFlights.map((deletedFlight) => (
            <li key={deletedFlight.id}>
              <span className="deleted">{deletedFlight.name}</span>
              <button className="btn-deleted" type="button" disabled>Delete</button>
            </li>
          ))}
        </ul>
      )}
      {flights.length > 0 ? (
        <ul>
          <h2>Delete Flight</h2>
          {flights.map((flight) => (
            <li key={flight.id} data-testid="flight-item">
              {flight.name}
              <button className="btn-delete" type="button" onClick={() => handleDelete(flight.id)} data-testid="delete-button">Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No flights available</p>
      )}
    </div>
  );
};

export default DeleteFlight;
