import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import {
  fetchFlights, setCity, setDate, setFlight, setReservedFlights,
} from '../redux/flights/flightsSlice';
import AddFlight from './AddFlight';

const ReserveFlight = () => {
  const { flightName } = useParams();
  const dispatch = useDispatch();
  const history = useNavigate();
  const {
    cities, user, flights, city, flight, date,
  } = useSelector((state) => state.flights);

  useEffect(() => {
    dispatch(fetchFlights());
  }, [dispatch]);

  const handleReserve = (e) => {
    e.preventDefault();
    const userName = e.target.querySelector('input[type="text"]').value;
    const data = {
      id: uuidv4(),
      name: userName,
      city,
      flight: flightName || flight,
      date,
    };
    dispatch(setReservedFlights(data));
    history('/reservations');
  };

  return (
    <div className="reserve-form">
      <AddFlight />
      <div className="overlay">
        <div>
          <div className="minus">
            <hr />
            <hr />
          </div>
        </div>
        <div className="middle">
          <div className="form">
            <h2>Reserve your favorite flight</h2>
            <hr />
            <p>
              <span>
                Welcome to our user-friendly booking form! Whether you are planning
              </span>
              <span>
                a relaxing getaway or an adventure-packed journey,
                our form makes booking your dream trip a breeze.
              </span>
              <span>
                With our hassle-free booking process, we have got you covered!
              </span>
              <br />
              <span>
                Just fill in your travel details and get set
              </span>
              <span>
                for an unforgettable travel experience.
              </span>
            </p>

            <hr />
            <form onSubmit={handleReserve}>
              <input type="text" value={user} readOnly />

              <input type="date" onChange={(e) => dispatch(setDate(e.target.value))} required />

              <select
                onChange={(e) => dispatch(setCity(e.target.value))}
                required
              >
                <option>Select a city</option>
                {cities.map((city) => (
                  <option value={city.country} key={city.id}>{city.name}</option>
                ))}
              </select>

              {flightName ? (
                <input
                  type="text"
                  value={flightName}
                  readOnly
                />
              ) : (
                <select
                  onChange={(e) => dispatch(setFlight(e.target.value))}
                  required
                >
                  <option>Destination</option>
                  {flights.map((flight) => (
                    <option value={flight.name} key={flight.id}>{flight.name}</option>
                  ))}
                </select>
              )}
              <button type="submit" className="reserve_submit">Book Now</button>
            </form>
          </div>
        </div>
        <div>
          <div className="mag">
            <i className="fa-solid fa-magnifying-glass" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReserveFlight;
