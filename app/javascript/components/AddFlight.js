import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFlight } from '../redux/flights/flightsSlice';
// import { useHistory } from 'react-router-dom';

function AddFlight() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [picture, setPicture] = useState('');
  const [basePrice, setBasePrice] = useState('');
  const [availableSlots, setAvailableSlots] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFlight = {
      name,
      picture,
      base_price: parseFloat(basePrice),
      available_slots: parseInt(availableSlots),
    };

    dispatch(addFlight(newFlight));

    // Clear input fields after submission
    setName('');
    setPicture('');
    setBasePrice('');
    setAvailableSlots('');
  };

  const handlePicturePaste = (e) => {
    const pastedValue = e.clipboardData.getData('Text');
    setPicture(pastedValue);
  };

  return (
    <div className="add-flight-container">
      <h2>Add New Flight</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Picture URL:</label>
        <input
          type="text"
          value={picture}
          onChange={(e) => setPicture(e.target.value)}
          onPaste={handlePicturePaste} // Handle paste event
          required
        />
        <div className="image-preview">
          {picture && <img src={picture} alt="Flight" />}
        </div>

        <label>Base Price:</label>
        <input type="number" value={basePrice} onChange={(e) => setBasePrice(e.target.value)} required />

        <label>Available Slots:</label>
        <input type="number" value={availableSlots} onChange={(e) => setAvailableSlots(e.target.value)} required />

        <button type="submit">Add Flight</button>
      </form>
    </div>
  );
}

export default AddFlight;
