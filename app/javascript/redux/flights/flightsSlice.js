import { createSlice, createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const url = 'http://localhost:3000/api/v1/flights';

const cities = [
  { id: uuidv4(), name: 'New York City', country: 'USA' },
  { id: uuidv4(), name: 'Tokyo', country: 'Japan' },
  { id: uuidv4(), name: 'London', country: 'UK' },
  { id: uuidv4(), name: 'Paris', country: 'France' },
  { id: uuidv4(), name: 'Los Angeles', country: 'USA' },
  { id: uuidv4(), name: 'Seoul', country: 'South Korea' },
  { id: uuidv4(), name: 'Shanghai', country: 'China' },
  { id: uuidv4(), name: 'Beijing', country: 'China' },
  { id: uuidv4(), name: 'Chicago', country: 'USA' },
  { id: uuidv4(), name: 'Istanbul', country: 'Turkey' },
  { id: uuidv4(), name: 'Miami', country: 'USA' },
  { id: uuidv4(), name: 'Moscow', country: 'Russia' },
  { id: uuidv4(), name: 'Sao Paulo', country: 'Brazil' },
  { id: uuidv4(), name: 'Mumbai', country: 'India' },
  { id: uuidv4(), name: 'Sydney', country: 'Australia' },
  { id: uuidv4(), name: 'Rio de Janeiro', country: 'Brazil' },
  { id: uuidv4(), name: 'Cairo', country: 'Egypt' },
  { id: uuidv4(), name: 'Mexico City', country: 'Mexico' },
  { id: uuidv4(), name: 'Bangkok', country: 'Thailand' },
  { id: uuidv4(), name: 'Toronto', country: 'Canada' },
  { id: uuidv4(), name: 'Buenos Aires', country: 'Argentina' },
  { id: uuidv4(), name: 'Dubai', country: 'UAE' },
  { id: uuidv4(), name: 'Hong Kong', country: 'China' },
  { id: uuidv4(), name: 'Singapore', country: 'Singapore' },
  { id: uuidv4(), name: 'Rome', country: 'Italy' },
  { id: uuidv4(), name: 'Berlin', country: 'Germany' },
  { id: uuidv4(), name: 'Barcelona', country: 'Spain' },
  { id: uuidv4(), name: 'Kuala Lumpur', country: 'Malaysia' },
  { id: uuidv4(), name: 'Amsterdam', country: 'Netherlands' },
  { id: uuidv4(), name: 'San Francisco', country: 'USA' },
  { id: uuidv4(), name: 'Vancouver', country: 'Canada' },
  { id: uuidv4(), name: 'San Diego', country: 'USA' },
  { id: uuidv4(), name: 'Houston', country: 'USA' },
  { id: uuidv4(), name: 'Washington, D.C.', country: 'USA' },
  { id: uuidv4(), name: 'Dallas', country: 'USA' },
  { id: uuidv4(), name: 'Istanbul', country: 'Turkey' },
  { id: uuidv4(), name: 'Abu Dhabi', country: 'UAE' },
  { id: uuidv4(), name: 'Jakarta', country: 'Indonesia' },
  { id: uuidv4(), name: 'Boston', country: 'USA' },
  { id: uuidv4(), name: 'Atlanta', country: 'USA' },
  { id: uuidv4(), name: 'Seattle', country: 'USA' },
  { id: uuidv4(), name: 'Tel Aviv', country: 'Israel' },
  { id: uuidv4(), name: 'Johannesburg', country: 'South Africa' },
  { id: uuidv4(), name: 'Melbourne', country: 'Australia' },
  { id: uuidv4(), name: 'Dubai', country: 'UAE' },
  { id: uuidv4(), name: 'Munich', country: 'Germany' },
  { id: uuidv4(), name: 'Montreal', country: 'Canada' },
  { id: uuidv4(), name: 'Prague', country: 'Czech Republic' },
  { id: uuidv4(), name: 'Auckland', country: 'New Zealand' },
  { id: uuidv4(), name: 'Stockholm', country: 'Sweden' },
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

export const fetchFlightDetails = createAsyncThunk('flights/fetchFlightDetails', async (id) => {
  try {
    const response = await axios.get(`${url}/${id}`);
    return response.data;
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
  flightDetails: {},
  cities,
  user: '',
  userId: 0,
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
  basePrice: null,
  availableSlots: null,
};

const flightsSlice = createSlice({
  name: 'flights',
  initialState,
  reducers: {
    setcwidth(state, action) {
      if (action.payload === 'left' || action.payload === 'right') {
        return { ...state, active: action.payload };
      }
      return { ...state, cwidth: action.payload };
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
      .addCase(fetchFlights.pending, (state) => ({ ...state, status: 'loading' }))
      .addCase(fetchFlights.fulfilled, (state, action) => ({
        ...state, flights: [...action.payload.flights], status: 'succeeded', user: action.payload.user.name, userId: action.payload.user.id,
      }))
      .addCase(fetchFlights.rejected, (state, action) => ({ ...state, status: 'failed', error: action.payload }))
      .addCase(postFlight.pending, (state) => ({ ...state, status: 'loading' }))
      .addCase(postFlight.fulfilled, (state, action) => ({
        ...state, flights: [...action.payload.flights], status: 'succeeded', user: action.payload.user,
      }))
      .addCase(postFlight.rejected, (state, action) => ({ ...state, status: 'failed', error: action.payload }))
      .addCase(deleteFlight.pending, (state) => ({ ...state, status: 'loading' }))
      .addCase(deleteFlight.fulfilled, (state, action) => {
        const deletedFlightId = action.payload;
        const updatedFlights = state.flights.filter((flight) => flight.id !== deletedFlightId);
        return { ...state, flights: updatedFlights };
      })
      .addCase(deleteFlight.rejected, (state, action) => ({ ...state, status: 'failed', error: action.payload }))
      .addCase(fetchFlightDetails.pending, (state) => ({ ...state, loading: true }))
      .addCase(fetchFlightDetails.fulfilled,
         (state, action) => {
        return { ...state, loading: false, flightDetails: action.payload };
      })
      .addCase(fetchFlightDetails.rejected, (state, action) => (
        { ...state,
          loading: false,
          error: action.error.message 
        }));
  },
});

export const {
  setcwidth, addFlight,
  setCity, setDate, setFlight,
  setReservedFlights, setName, setAvailableSlots,
  setBasePrice, setPicture,
} = flightsSlice.actions;

export default flightsSlice.reducer;
