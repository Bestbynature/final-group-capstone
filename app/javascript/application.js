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