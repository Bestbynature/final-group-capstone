import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import FlightDetails from '../../app/javascript/components/Flights';
import store from '../../app/javascript/redux/store';
import reducer, {
  fetchFlightDetails,
} from '../../app/javascript/redux/flights/flightsSlice';

describe('Flights', () => {
  it('renders flights correctly', () => {
    const details = renderer
      .create(
        <BrowserRouter>
          <Provider store={store}>
            <FlightDetails />
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
          <FlightDetails />
        </Provider>
      </BrowserRouter>,
    );
  });
});

describe('redux', () => {
  const state = {
    flightDetails: {},
    isLoading: false,
    error: null,
  };
  expect(reducer(state, fetchFlightDetails)).toEqual({
    flightDetails: {},
    isLoading: false,
    error: null,
  });
});
