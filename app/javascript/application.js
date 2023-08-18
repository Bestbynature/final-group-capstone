import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './components/Carousel'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (<div>
    <h1>Hello, World!</h1>
    <Carousel/>
  </div>);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import App from "./components/App";
// import Navbar from './components/Navbar';
import './index'
// import './components/styles/navbar.css';


