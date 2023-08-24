import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFlightDetails } from '../redux/flights/flightsSlice';
import AddFlight from './AddFlight';

const FlightDetails = () => {
  const { index } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFlightDetails(Number(index)));
  }, [dispatch, index]);

  const { flightDetails } = useSelector((store) => store.flights);

  const {
    picture, name, basePrice, availableSlots,
  } = flightDetails;

  return (

    <div className="details">
      <AddFlight />
      <div />
      <div />
      <div />
      <div>&nbsp;</div>
      <div className="big-image">
        <img src={picture} alt={name} title={name} className="image2" />
      </div>
      <div className="more-details">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Services</th>
              <th scope="col" className="text-end">Remarks</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            <tr>
              <td><strong>Name </strong></td>
              <td className="text-end">{name}</td>
            </tr>
            <tr>
              <td>Price</td>
              <td className="text-end">{basePrice}</td>
            </tr>
            <tr>
              <td>Slots Available</td>
              <td className="text-end">{availableSlots}</td>
            </tr>
            <tr>
              <td>Emergency Services</td>
              <td className="text-end">Available 24/7</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-3"><strong>5.9% discount to all new customers</strong></p>
        <p className="btn width-full"><Link to="/"> Discover more flights</Link></p>
        <div className="reserve">
          <Link to={`/reserve_flight?flightName=${encodeURIComponent(name)}`} className="btn reserve-submit">Reserve</Link>
        </div>
      </div>
      <div />
      <div />
      <div />
    </div>
  );
};

export default FlightDetails;
