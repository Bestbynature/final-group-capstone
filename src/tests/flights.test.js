import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Flights from '../../app/javascript/components/Flights';
import store from '../../app/javascript/redux/store';

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
