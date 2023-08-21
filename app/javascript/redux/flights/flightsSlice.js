import { createSlice, createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:3000/api/v1/flights';

const cities = [
  { name: 'New York City', country: 'USA' },
  { name: 'Tokyo', country: 'Japan' },
  { name: 'London', country: 'UK' },
  { name: 'Paris', country: 'France' },
  { name: 'Los Angeles', country: 'USA' },
  { name: 'Seoul', country: 'South Korea' },
  { name: 'Shanghai', country: 'China' },
  { name: 'Beijing', country: 'China' },
  { name: 'Chicago', country: 'USA' },
  { name: 'Istanbul', country: 'Turkey' },
  { name: 'Miami', country: 'USA' },
  { name: 'Moscow', country: 'Russia' },
  { name: 'Sao Paulo', country: 'Brazil' },
  { name: 'Mumbai', country: 'India' },
  { name: 'Sydney', country: 'Australia' },
  { name: 'Rio de Janeiro', country: 'Brazil' },
  { name: 'Cairo', country: 'Egypt' },
  { name: 'Mexico City', country: 'Mexico' },
  { name: 'Bangkok', country: 'Thailand' },
  { name: 'Toronto', country: 'Canada' },
  { name: 'Buenos Aires', country: 'Argentina' },
  { name: 'Dubai', country: 'UAE' },
  { name: 'Hong Kong', country: 'China' },
  { name: 'Singapore', country: 'Singapore' },
  { name: 'Rome', country: 'Italy' },
  { name: 'Berlin', country: 'Germany' },
  { name: 'Barcelona', country: 'Spain' },
  { name: 'Kuala Lumpur', country: 'Malaysia' },
  { name: 'Amsterdam', country: 'Netherlands' },
  { name: 'San Francisco', country: 'USA' },
  { name: 'Vancouver', country: 'Canada' },
  { name: 'San Diego', country: 'USA' },
  { name: 'Houston', country: 'USA' },
  { name: 'Washington, D.C.', country: 'USA' },
  { name: 'Dallas', country: 'USA' },
  { name: 'Istanbul', country: 'Turkey' },
  { name: 'Abu Dhabi', country: 'UAE' },
  { name: 'Jakarta', country: 'Indonesia' },
  { name: 'Boston', country: 'USA' },
  { name: 'Atlanta', country: 'USA' },
  { name: 'Seattle', country: 'USA' },
  { name: 'Tel Aviv', country: 'Israel' },
  { name: 'Johannesburg', country: 'South Africa' },
  { name: 'Melbourne', country: 'Australia' },
  { name: 'Dubai', country: 'UAE' },
  { name: 'Munich', country: 'Germany' },
  { name: 'Montreal', country: 'Canada' },
  { name: 'Prague', country: 'Czech Republic' },
  { name: 'Auckland', country: 'New Zealand' },
  { name: 'Stockholm', country: 'Sweden' },
];

export const fetchFlights = createAsyncThunk('flights/fetchFlights', async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return isRejectedWithValue(error.response.data);
  }
});

export const deleteFlight = createAsyncThunk('flights/deleteFlight', async (flightId) => {
  try {
    await axios.delete(`${url}/${flightId}`);
    return flightId;
  } catch (error) {
    return isRejectedWithValue(error.response.data);
  }
});

export const postFlight = createAsyncThunk('flights/postFlights', async (formData) => {
  try {
    const response = await axios.post(url, formData);
    return response.data;
  } catch (error) {
    return isRejectedWithValue(error.response.data);
  }
});

const initialState = {
  flights: [],
  cities,
  user: '',
  user_id: 0,
  status: 'idle',
  error: null,
  cwidth: 0,
  active: '',
  city: '',
  date: '',
  flight: '',
  reservedFlights: [],
  name: '',
  picture: '',
  basePrice: 0,
  availableSlots: 0,
};

const flightsSlice = createSlice({
  name: 'flights',
  initialState,
  reducers: {
    setcwidth(state, action) {
      if (action.payload === 'left' || action.payload === 'right') {
        return { ...state, active: action.payload };
      } else {
        return { ...state, cwidth: action.payload };
      }
    },
    setReservedFlights(state, action) {
      localStorage.setItem('reservedFlights', JSON.stringify([...state.reservedFlights, action.payload]));
      return { ...state, reservedFlights: [...state.reservedFlights, action.payload] };
    },
    setCity(state, action) {
      return { ...state, city: action.payload };
    },
    setDate(state, action) {
      return { ...state, date: action.payload };
    },
    setFlight(state, action) {
      return { ...state, flight: action.payload };
    },
    setName(state, action) {
      return { ...state, name: action.payload };
    },
    setPicture(state, action) {
      return { ...state, picture: action.payload };
    },
    setBasePrice(state, action) {
      return { ...state, basePrice: action.payload };
    },
    setAvailableSlots(state, action) {
      return { ...state, availableSlots: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFlights.pending, (state) => {
        return { ...state, status: 'loading' };
      })
      .addCase(fetchFlights.fulfilled, (state, action) => {
        return { ...state, flights: [...action.payload.flights], status: 'succeeded', user: action.payload.user.name, user_id: action.payload.user.id };
      })
      .addCase(fetchFlights.rejected, (state, action) => {
        return { ...state, status: 'failed', error: action.payload };
      })
      .addCase(postFlight.pending, (state) => {
        return { ...state, status: 'loading' };
      })
      .addCase(postFlight.fulfilled, (state, action) => {
        return { ...state, flights: [...action.payload.flights], status: 'succeeded', user: action.payload.user };
      })
      .addCase(postFlight.rejected, (state, action) => {
        return { ...state, status: 'failed', error: action.payload };
      })
      .addCase(deleteFlight.pending, (state) => {
        return { ...state, status: 'loading' };
      })
      .addCase(deleteFlight.fulfilled, (state, action) => {
        const deletedFlightId = action.payload;
        const updatedFlights = state.flights.filter((flight) => flight.id !== deletedFlightId);
        return { ...state, flights: updatedFlights };
      })
      .addCase(deleteFlight.rejected, (state, action) => {
        return { ...state, status: 'failed', error: action.payload };
      });
  },
});

export const { setcwidth, setCsrfToken, addFlight, setCity, setDate, setFlight, setReservedFlights, setName, setAvailableSlots, setBasePrice, setPicture } = flightsSlice.actions;

export default flightsSlice.reducer;
