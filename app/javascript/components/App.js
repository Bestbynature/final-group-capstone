import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Flights from './Flights';
import DeleteFlight from './DeleteFlight';
import AddFlight from './AddFlight';
import ReserveFlight from './ReserveFlight';


const App = () => {
  return (
   <div className='App '>

     <Navbar/>
     <Routes>
       {/* <Route path='/' element={<App/>} /> */}
       <Route path='/' element={<Flights/>} />
       <Route path="/add_flight" element={<AddFlight />} />
       <Route path="/reserve_flight" element={<ReserveFlight />} />
       <Route path="/delete_flight" element={<DeleteFlight />} />
     </Routes>

 </div>
  );
};



export default App;
