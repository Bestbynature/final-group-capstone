import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { setReservedFlights } from '../redux/flights/flightsSlice';
import AddFlight from './AddFlight';

const Reservations = () => {
    const dispatch = useDispatch();
    const { reservedFlights } = useSelector((store) => store.flights);

    useEffect(() => {
        if(reservedFlights.length === 0){
        const data = JSON.parse(localStorage.getItem('reservedFlights'));
        if(data) data.map(flight => dispatch(setReservedFlights(flight)));
        }
    }, [reservedFlights, dispatch]);

  return (
    <div className='reservations'>
        <AddFlight />
        <h2>Reserved Destinations</h2>
        <div className='reserved-flights'>
            {reservedFlights.map((flight, index) => (
                <div className='reserved-flight' key={index}>
                    <table>
                        <tr>
                            <td><h3>Name:</h3> </td>
                            <td><h3>{flight.name}</h3></td>
                        </tr>
                        <tr>
                            <td><h3>From:</h3></td>
                            <td><h3>{flight.city}</h3></td>
                        </tr>
                        <tr>
                            <td><h3>To:</h3></td>
                            <td><h3>{flight.flight}</h3></td>
                        </tr>
                        <tr>
                            <td><h3>Date of Departure:</h3></td>
                            <td><h3>{flight.date}</h3></td>
                        </tr>
                    </table>
                </div>))}
        </div>

    </div>
  )
}

export default Reservations
