import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFlight, fetchFlights } from '../redux/flights/flightsSlice';

const DeleteFlight = () => {
  const dispatch = useDispatch();
  const flights = useSelector((state) => state.flights.flights);

  const [deletedFlights, setDeletedFlights] = useState([]);
  const deletedFlightRef = useRef(null);

  const handleDelete = (flightId) => {
    const flightToDelete = flights.find((flight) => flight.id === flightId);
    if (flightToDelete) {
      dispatch(deleteFlight(flightId));
      deletedFlightRef.current = flightToDelete;
      setDeletedFlights([...deletedFlights, flightToDelete]);
    }
  };

  useEffect(() => {
    dispatch(fetchFlights());
  }, [dispatch]);

  return (
    <div className="delete-flight">
      {deletedFlights.length > 0 && (
        <ul>
          <h2>Deleted Flights</h2>
          {deletedFlights.map((deletedFlight) => (
            <li key={deletedFlight.id} >
           <span className='deleted'>{deletedFlight.name}</span>
            <button disabled={true}>Delete</button>
            </li>
          ))}
        </ul>
      )}
      <h2>Delete Flight</h2>
      <ul>
        {flights.map((flight) => (
          <li key={flight.id}>
            {flight.name}
            <button onClick={() => handleDelete(flight.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteFlight;
