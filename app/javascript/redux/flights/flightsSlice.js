import { createSlice, createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:3000/api/v1/flights';


export const fetchFlights = createAsyncThunk('flights/fetchFlights', async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return isRejectedWithValue(error.response.data);
  }
});

// deleteFlight
export const deleteFlight = createAsyncThunk('flights/deleteFlight', async (flightId) => {
    try {
      await axios.delete(`${url}/${flightId}`);
      return flightId; // Return the deleted flight's ID
    } catch (error) {
        console.error('Error deleting flight:', error.response.data);
        return isRejectedWithValue(error.response.data);

    }
  });

const initialState = {
  flights: [],
  status: 'idle',
  error: null,
  cwidth: 0,
  active: '',
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
    AddFlight(state, action) {
      // Handle adding a new flight to the state
      const newFlight = action.payload;
      return { ...state, flights: [...state.flights, newFlight] };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFlights.pending, (state) => {
        return { ...state, status: 'loading' };
      })
      .addCase(fetchFlights.fulfilled, (state, action) => {
        return { ...state, flights: [...action.payload], status: 'succeeded' };
      })
      .addCase(fetchFlights.rejected, (state, action) => {
        return { ...state, status: 'failed', error: action.payload };
      })
      .addCase(deleteFlight.fulfilled, (state, action) => {
        const deletedFlightId = action.payload;
        const updatedFlights = state.flights.filter((flight) => flight.id !== deletedFlightId);
        return { ...state, flights: updatedFlights };
      })
  },
});

export const { setcwidth, AddFlight } = flightsSlice.actions;

export default flightsSlice.reducer;
