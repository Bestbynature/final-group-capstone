import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { setCsrfToken } from '../redux/flights/flightsSlice';
import Navbar from './Navbar';
import Flights from './Flights';
import DeleteFlight from './DeleteFlight';
import AddFlight from './AddFlight';
import ReserveFlight from './ReserveFlight';
import Layout from './Layout';
import Reservations from './Reservations';
import { useDispatch } from 'react-redux';


const App = () => {

  const dispatch = useDispatch();
  const csrfToken = document.querySelector('meta[name="csrf-token"]').content;
  dispatch(setCsrfToken(csrfToken))

  return (
   <div className='App '>

     <Navbar/>
     <Routes>
       <Route path='/' element={<Layout />} />
       <Route index element={<Flights />}/>
       <Route path="/add_flight" element={<AddFlight />} />
       <Route path="/reserve_flight" element={<ReserveFlight />} />
       <Route path="/reservations" element={<Reservations />} />
       <Route path="/delete_flight" element={<DeleteFlight />} />
     </Routes>

 </div>
  );
};



export default App;
