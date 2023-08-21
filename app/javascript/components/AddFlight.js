import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postFlight, setPicture, setAvailableSlots, setBasePrice, setName, postFlights } from "../redux/flights/flightsSlice";
import { useNavigate } from 'react-router-dom';

const AddFlight = () => {

  const dispatch = useDispatch();
  const history = useNavigate();

  const { name, picture, basePrice, availableSlots, user_id } = useSelector((store) => store.flights);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
        formData.append('flight[name]', name);
        formData.append('flight[picture]', picture);
        formData.append('flight[base_price]', basePrice);
        formData.append('flight[available_slots]', availableSlots);
        formData.append('flight[reserved]', 'false');
        formData.append('flight[user_id]', user_id);
        // dispatch(postDoctor(formData));
    // console.log("Form submitted!", name)
    // const newFlight = {
    //   name,
    //   picture,
    //   user: user.name,
    //   reserved: false,
    //   base_price: parseFloat(basePrice),
    //   available_slots: parseInt(availableSlots),
    // };

    dispatch(postFlight(formData));
    history('/');
  };

  return (
    <div className="add-flight-container">
      <h2>Add New Flight</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => dispatch(setName(e.target.value))}
          required
        />

        <label>Picture URL:</label>
        <input
          type="text"
          value={picture}
          onChange={(e) => dispatch(setPicture(e.target.value))}
          required
        />

        <label>Base Price:</label>
        <input
          type="number"
          value={basePrice}
          onChange={(e) => dispatch(setBasePrice(e.target.value))}
          required
        />

        <label>Available Slots:</label>
        <input
          type="number"
          value={availableSlots}
          onChange={(e) => dispatch(setAvailableSlots(e.target.value))}
          required
        />

        <button type="submit">Add Flight</button>
      </form>
    </div>
  );
}

export default AddFlight;
