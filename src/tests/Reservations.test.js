import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; // Import configureStore
import Reservations from '../../app/javascript/components/Reservations'; // Update the path

const mockStore = configureStore([]);

describe('Reservations Component', () => {
  test('renders the component with reserved flights', () => {
    const initialState = {
      flights: {
        reservedFlights: [
          // Your reserved flights data here
        ],
      },
    };

    const store = mockStore(initialState);

    // Render the component using MemoryRouter and Provider
    const { container } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Reservations />
        </Provider>
      </MemoryRouter>,
    );

    // Assertions
    const reservedFlightElements = container.querySelectorAll('.reserved-flight');
    expect(reservedFlightElements.length).toBe(initialState.flights.reservedFlights.length);

    // Snapshot test
    expect(container).toMatchSnapshot();
  });
});
