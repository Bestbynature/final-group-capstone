
import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFlight, fetchFlights } from '../redux/flights/flightsSlice'; // Adjust the path

const DeleteFlight = () => {
  const dispatch = useDispatch();
  const flights = useSelector((state) => state.flights.flights);

  const handleDelete = (flightId) => {
    dispatch(deleteFlight(flightId));
  };

  useEffect(() => {
    dispatch(fetchFlights())
  }, [dispatch]);

  return (
    <div className="delete-flight">
      <h2>Delete Flight</h2>
      <ul>
        {flights.map((flight) => (
          <li key={flight.id}>
          {flight.user_id}
          <br></br>
            {flight.name}
            <button onClick={() => handleDelete(flight.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteFlight;
