import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import DeleteFlight from '../../app/javascript/components/DeleteFlight';
import store from '../../app/javascript/redux/store';
import reducer, {
  fetchFlights,
} from '../../app/javascript/redux/flights/flightsSlice';

jest.mock('../../app/javascript/components/AddFlight', () => ({
  __esModule: true,
  default: () => <div data-testid="add-flight-mock">AddFlight Mock</div>,
}));

describe('DeleteFlights', () => {
  it('renders flights correctly', () => {
    const deletePage = renderer
      .create(
        <BrowserRouter>
          <Provider store={store}>
            <DeleteFlight />
          </Provider>
        </BrowserRouter>,
      )
      .toJSON();
    expect(deletePage).toMatchSnapshot();
  });

  it('renders Delete page correctly', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <DeleteFlight />
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
    error: '',
  });
});
