import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  postFlight, setPicture, setAvailableSlots, setBasePrice, setName,
} from '../redux/flights/flightsSlice';
import ServerSideError from './ServerSideError';

const AddFlight = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  // const [isServerSideError, setIsServerSideError] = useState(false);
  // const [serverSideError, setServerSideError] = useState([]);

  const {
    name, picture, basePrice, availableSlots, 
    userId, isServerError, serverError,
  } = useSelector((store) => store.flights);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('flight[name]', name);
    formData.append('flight[picture]', picture);
    formData.append('flight[base_price]', basePrice);
    formData.append('flight[available_slots]', availableSlots);
    formData.append('flight[reserved]', 'false');
    formData.append('flight[user_id]', userId);

    dispatch(postFlight(formData));
    history('/');
  };

  return (

    <div className="modal fade" id="addModal" tabIndex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
      <form onSubmit={handleSubmit}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title" id="addModalLabel">Add a New Flight</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              {isServerError && <ServerSideError serverError={serverError} />}
              <input
                className="form-control mt-3"
                type="text"
                value={name}
                placeholder="Flight Name"
                onChange={(e) => dispatch(setName(e.target.value))}
                required
              />

              <input
                className="form-control mt-3"
                type="text"
                value={picture}
                placeholder="Picture URL for the flight"
                onChange={(e) => dispatch(setPicture(e.target.value))}
                required
              />

              <input
                className="form-control mt-3"
                type="number"
                value={basePrice}
                placeholder="Base Price for the destination"
                onChange={(e) => dispatch(setBasePrice(e.target.value))}
                required
              />

              <input
                className="form-control mt-3"
                type="number"
                value={availableSlots}
                placeholder="Available Slots for the destination"
                onChange={(e) => dispatch(setAvailableSlots(e.target.value))}
                required
              />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger form-control mt-2" data-bs-dismiss="modal">Cancel</button>
              <button type="submit" className="btn add-submit form-control mt-3" data-bs-dismiss="modal">Create a Flight</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddFlight;
