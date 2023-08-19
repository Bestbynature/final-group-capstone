import { createSlice, createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:3000/api/v1/flights';

const flights = [
    {name: 'Brazil', picture: 'https://images.pexels.com/photos/16129715/pexels-photo-16129715.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=300', base_price: 1500, available_slots: 10, reserved: false},
    {name: 'Egypt', picture: 'https://images.pexels.com/photos/3958516/pexels-photo-3958516.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=300', base_price: 1100, available_slots: 10, reserved: false},
    {name: 'America', picture: 'https://images.pexels.com/photos/356844/pexels-photo-356844.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=300', base_price: 2000, available_slots: 10, reserved: false},
    {name: 'Morocco', picture: 'https://images.pexels.com/photos/6945915/pexels-photo-6945915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=300', base_price: 1200, available_slots: 10, reserved: false},
    {name: 'Cameroon', picture: 'https://images.pexels.com/photos/17290979/pexels-photo-17290979.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=300', base_price: 1400, available_slots: 10, reserved: false},
    {name: 'Nigeria', picture: 'https://images.pexels.com/photos/16237519/pexels-photo-16237519.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=300', base_price: 1300, available_slots: 10, reserved: false},
    {name: 'Mexico', picture: 'https://images.pexels.com/photos/17806066/pexels-photo-17806066.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=300', base_price: 1050, available_slots: 10, reserved: false},
    {name: 'Ghana', picture: 'https://images.pexels.com/photos/6567674/pexels-photo-6567674.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=300', base_price: 1000, available_slots: 10, reserved: false},
  ]

export const fetchFlights = createAsyncThunk('flights/fetchFlights', async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return isRejectedWithValue(error.response.data);
  }
});

const initialState = {
  flights: [...flights],
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
      });
  },
});

export const { setcwidth, AddFlight } = flightsSlice.actions;

export default flightsSlice.reducer;
