import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import ReserveFlight from '../../app/javascript/components/ReserveFlight';
import store from '../../app/javascript/redux/store';

test('renders ReserveFlight component', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        {' '}
        {/* Wrap with MemoryRouter */}
        <ReserveFlight />
      </MemoryRouter>
    </Provider>,
  );
});
