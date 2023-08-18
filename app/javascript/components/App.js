import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Flights from './Flights';
import DeleteFlight from './DeleteFlight';
import AddFlight from './AddFlight';
import ReserveFlight from './ReserveFlight';
import Layout from './Layout';


const App = () => {
  return (
   <div className='App '>

     <Navbar/>
     <Routes>
       <Route path='/' element={<Layout />} />
       <Route index element={<Flights />}/>
       <Route path="/add_flight" element={<AddFlight />} />
       <Route path="/reserve_flight" element={<ReserveFlight />} />
       <Route path="/delete_flight" element={<DeleteFlight />} />
     </Routes>

 </div>
  );
};



export default App;
