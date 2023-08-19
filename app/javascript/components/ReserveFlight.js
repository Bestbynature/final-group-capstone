import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchFlights, setCity, setDate, setFlight, setReservedFlights } from '../redux/flights/flightsSlice';

const ReserveFlight = () => {

  const dispatch = useDispatch();
  const history = useNavigate();
  const { cities, user, flights, city, flight, date } = useSelector((state) => state.flights);

  useEffect(() => {
    dispatch(fetchFlights());
  }, [dispatch]);

  const handleReserve = (e) => {
    e.preventDefault();
    const userName = e.target.querySelector('input[type="text"]').value;
    const data = {
            name: userName,
            city: city,
            flight: flight,
            date: date,
          };
    dispatch(setReservedFlights(data));
    history('/reservations');
  };

  return (
    <div className='reserve-form'>
      <div className="overlay">
        <div>
          <div className="minus">
            <hr />
            <hr />
          </div>
        </div>
        <div className='middle'>
          <div className="form">
            <h2>Reserve your favorite flight</h2> <hr />
            <p>Welcome to our user-friendly booking form! Whether you're planning a relaxing getaway or an adventure-packed journey, our form makes booking your dream trip a breeze. With our hassle-free booking process, We got you covered! <br />Just fill in your travel details and get set for an unforgettable travel experience.</p>
            <hr />
            <form onSubmit={handleReserve}>
            <input type="text" value={user}/>
                
            <input type="date" onChange={(e)=>dispatch(setDate(e.target.value))} />
                
              <select
               onChange={(e)=>dispatch(setCity(e.target.value))}
               >
              <option>Select a city</option>
                    {cities.map((city, index)=>(
                      <option value={city.country} key={index}>{city.name}</option>
                    ))}
              </select>

              <select
               onChange={(e)=>dispatch(setFlight(e.target.value))}
               >
              <option>Destination</option>
                    {flights.map((flight, index)=>(
                      <option value={flight.name} key={index}>{flight.name}</option>
                    ))}
              </select>

              <button type="submit">Book Now</button>
            </form>
          </div>
        </div>
        <div>
          <div className='mag'>
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReserveFlight