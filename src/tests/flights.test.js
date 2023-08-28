import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Flights from '../../app/javascript/components/Flights';
import store from '../../app/javascript/redux/store';
import reducer, {
  fetchFlights,
} from '../../app/javascript/redux/flights/flightsSlice';

describe('Flights', () => {
  it('renders flights correctly', () => {
    const details = renderer
      .create(
        <BrowserRouter>
          <Provider store={store}>
            <Flights />
          </Provider>
        </BrowserRouter>,
      )
      .toJSON();
    expect(details).toMatchSnapshot();
  });
  it('renders flights correctly', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Flights />
        </Provider>
      </BrowserRouter>,
    );
  });
});

describe('redux', () => {
  const state = {
    flights: [
      {
        name: 'Egypt', picture: 'https://images.pexels.com/photos/3958516/pexels-photo-3958516.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=300', base_price: 1100, available_slots: 10, reserved: false,
      },
    ],
    isLoading: false,
    error: '',
  };
  expect(reducer(state, fetchFlights)).toEqual({
    flights: [
      {
        name: 'Egypt', picture: 'https://images.pexels.com/photos/3958516/pexels-photo-3958516.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=300', base_price: 1100, available_slots: 10, reserved: false,
      },
    ],
    isLoading: false,
    error: ''
  });
});
