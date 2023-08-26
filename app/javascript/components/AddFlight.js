import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  postFlight, setPicture, setAvailableSlots, setBasePrice, setName,
} from '../redux/flights/flightsSlice';

const AddFlight = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const {
    name, picture, basePrice, availableSlots, userId,
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
              <input
                className="form-control mt-3"
                type="text"
                value={name}
                placeholder="Flight Name"
                onChange={(e) => dispatch(setName(e.target.value))}
                required
                data-testid="flight-name-input"

              />

              <input
                className="form-control mt-3"
                type="text"
                value={picture}
                placeholder="Picture URL for the flight"
                onChange={(e) => dispatch(setPicture(e.target.value))}
                required
                data-testid="flight-picture-input"
              />

              <input
                className="form-control mt-3"
                type="number"
                value={basePrice}
                placeholder="Base Price for the destination"
                onChange={(e) => dispatch(setBasePrice(e.target.value))}
                required
                data-testid="flight-base-price-input"
              />

              <input
                className="form-control mt-3"
                type="number"
                value={availableSlots}
                placeholder="Available Slots for the destination"
                onChange={(e) => dispatch(setAvailableSlots(e.target.value))}
                required
                data-testid="flight-available-slots-input"
              />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger form-control mt-2" data-bs-dismiss="modal">Cancel</button>
              <button type="submit" className="btn add-submit form-control mt-3" data-bs-dismiss="modal" data-testid="add-flight-form">Create a Flight</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddFlight;
