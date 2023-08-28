import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import AddFlight from '../../app/javascript/components/AddFlight';
import store from '../../app/javascript/redux/store';

describe('AddFlight', () => {
  it('renders add flight form correctly', () => {
    const details = renderer
      .create(
        <BrowserRouter>
          <Provider store={store}>
            <AddFlight />
          </Provider>
        </BrowserRouter>,
      )
      .toJSON();
    expect(details).toMatchSnapshot();
  });

  it('submits new flight form and dispatches action correctly', async () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <AddFlight />
        </Provider>
      </BrowserRouter>,
    );

    // Fill in the form fields
    fireEvent.change(getByTestId('flight-name-input'), { target: { value: 'New Flight' } });
    fireEvent.change(getByTestId('flight-picture-input'), { target: { value: 'https://example.com/picture.jpg' } });
    fireEvent.change(getByTestId('flight-base-price-input'), { target: { value: '100' } });
    fireEvent.change(getByTestId('flight-available-slots-input'), { target: { value: '10' } });

    fireEvent.submit(getByTestId('add-flight-form'));
  });
});
