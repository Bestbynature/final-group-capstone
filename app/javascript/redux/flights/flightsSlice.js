import { createSlice, createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:3000/api/v1/flights'

// const flights = [
//     {name: 'Brazil', image: 'https://images.pexels.com/photos/16129715/pexels-photo-16129715.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=300'},
//     {name: 'Egypt', image: 'https://images.pexels.com/photos/3958516/pexels-photo-3958516.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=300'},
//     {name: 'America', image: 'https://images.pexels.com/photos/356844/pexels-photo-356844.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=300'},
//     {name: 'Morocco', image: 'https://images.pexels.com/photos/6945915/pexels-photo-6945915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=300'},
//     {name: 'Cameroon', image: 'https://images.pexels.com/photos/17290979/pexels-photo-17290979.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=300'},
//     {name: 'Nigeria', image: 'https://images.pexels.com/photos/16237519/pexels-photo-16237519.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=300'},
//     {name: 'Mexico', image: 'https://images.pexels.com/photos/17806066/pexels-photo-17806066.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=300'},
//     {name: 'Ghana', image: 'https://images.pexels.com/photos/6567674/pexels-photo-6567674.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=300'},
//   ]

export const fetchFlights = createAsyncThunk('flights/fetchFlights', async () => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        return isRejectedWithValue(error.response.data);
    }
});

const initialState = {
    flights: [],
    status: 'idle',
    error: null,
    cwidth: 0,
    active: null
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
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFlights.pending, (state) => {
                return {...state, status: 'loading'}
            })
            .addCase(fetchFlights.fulfilled, (state, action) => {
                return {...state, flights: [...action.payload], status: 'succeeded'}
            })
            .addCase(fetchFlights.rejected, (state, action) => {
                return {...state, status: 'failed', error: action.payload}
            })
    }
})

export const { setcwidth } = flightsSlice.actions;

export default flightsSlice.reducer;