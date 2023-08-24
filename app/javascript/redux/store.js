import { configureStore } from '@reduxjs/toolkit';
import flightsReducer from './flights/flightsSlice';

const store = configureStore({
  reducer: {
    flights: flightsReducer,
  },
});

export default store;
