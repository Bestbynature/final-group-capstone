import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from "./components/App";
// import Navbar from './components/Navbar';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>,
);
// document.addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(
//    <BrowserRouter>
//    <Navbar/>,
//    <Routes>
//    <Route>
//       <Route path="/" component={App} />
//     </Route>
//     </Routes>
//     </BrowserRouter>,
//   )
// })
