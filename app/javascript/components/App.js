import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Flights from './Flights';
import DeleteFlight from './DeleteFlight';
import ReserveFlight from './ReserveFlight';
import Layout from './Layout';
import Reservations from './Reservations';
import FlightDetails from './FlightDetails';
import AddFlight from './AddFlight';

const App = () => (
  <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route index element={<Flights />} />
      <Route path="/reserve_flight" element={<ReserveFlight />} />
      <Route path="/details/:index" element={<FlightDetails />} />
      <Route path="/reservations" element={<Reservations />} />
      <Route path="/delete_flight" element={<DeleteFlight />} />
      <Route path="/add_flight" exact element={<AddFlight />} />
    </Routes>
  </div>
);

export default App;
