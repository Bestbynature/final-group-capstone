import React from 'react';
import { render, waitFor, fireEvent, act } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
import { useDispatch, useSelector } from 'react-redux';
import DeleteFlight from '../../app/javascript/components/DeleteFlight';
import { deleteFlight, fetchFlights } from '../../app/javascript/redux/flights/flightsSlice';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock('../../app/javascript/redux/flights/flightsSlice', () => ({
  fetchFlights: jest.fn(),
  deleteFlight: jest.fn(),
}));

// Mock AddFlight component
jest.mock('../../app/javascript/components/AddFlight', () => {
  return {
    __esModule: true,
    default: () => <div data-testid="add-flight-mock">AddFlight Mock</div>,
  };
});

describe('DeleteFlight component', () => {
  beforeEach(() => {
    useDispatch.mockReturnValue(jest.fn());
    useSelector.mockReturnValue({
      flights: {
        flights: [
          { name: 'Brazil', picture: 'picture1', basePrice: 1500, availableSlots: 10, reserved: false, userId: 1, id: 1 },
          { name: 'Egypt', picture: 'picture2', basePrice: 1100, availableSlots: 10, reserved: false, userId: 1, id: 2 },
        ],
      }
      
    });
  });
  
  afterEach(() => {
    useDispatch.mockReset();
    useSelector.mockReset();
    fetchFlights.mockReset();
    deleteFlight.mockReset();
  });

  test('renders Flights list correctly', async () => {
    // Render the component
    render(<DeleteFlight />);
  
    // Use act to wait for flights to be available
    await act(async () => {
      await waitFor(() => {
        expect(fetchFlights).toHaveBeenCalled();
      });
    });
  
    const flightItems = screen.getAllByTestId('flight-item');
    expect(flightItems.length).toBe(2);
  });

  test('deletes a flight when the delete button is clicked', async () => {
    const { getAllByRole } = render(<DeleteFlight />);
    
    // Wait for flights to be available
    await waitFor(() => {
      expect(fetchFlights).toHaveBeenCalled();
    });

    const deleteButton = getAllByRole('button', { name: 'Delete' });
    fireEvent.click(deleteButton[0]);

    expect(deleteFlight).toHaveBeenCalledWith(1); // Assuming the flight id is 1.
  });

  test('displays deleted flights', async () => {
    const { getAllByTestId, getByText } = render(<DeleteFlight />);
    
    // Wait for flights to be available
    await waitFor(() => {
      expect(fetchFlights).toHaveBeenCalled();
    });
      
    const deleteButtons = getAllByTestId('delete-button');
    fireEvent.click(deleteButtons[0]);
  
    await waitFor(() => {
      const deletedFlight = getByText('Deleted Flights');
      expect(deletedFlight).toBeInTheDocument();
    });
  });
});



// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store'; 
// import DeleteFlight from '../../app/javascript/components/DeleteFlight';
// // import { deleteFlight } from '../../app/javascript/redux/flights/flightsSlice';

// // write a full comprehensive test for the handleDelete function

// describe('DeleteFlight', () => {
//     const mockStore = configureStore();
//     const initialState = {
//         flights: [
//         {
//             id: 1,
//             name: 'Flight 1',
//         },
//         {
//             id: 2,
//             name: 'Flight 2',
//         },
//         {
//             id: 3,
//             name: 'Flight 3',
//         },
//         ],
//     };
//     const store = mockStore(initialState);
    
//     beforeEach(() => {
//         render(
//         <Provider store={store}>
//             <DeleteFlight />
//         </Provider>,
//         );
//     });
    
//     it('should render the DeleteFlight component', () => {
//         expect(screen.getByText('Delete Flight')).toBeInTheDocument();
//     });
    
//     it('should render the flight names', () => {
//         expect(screen.getByText('Flight 1')).toBeInTheDocument();
//         expect(screen.getByText('Flight 2')).toBeInTheDocument();
//         expect(screen.getByText('Flight 3')).toBeInTheDocument();
//     });
    
//     it('should render the delete buttons', () => {
//         expect(screen.getByText('Delete')).toBeInTheDocument();
//     });
    
//     it('should render the deleted flights', () => {
//         expect(screen.getByText('Deleted Flights')).toBeInTheDocument();
//     });
    
//     it('should render the deleted flight names', () => {
//         expect(screen.getByText('Flight 1')).toBeInTheDocument();
//         expect(screen.getByText('Flight 2')).toBeInTheDocument();
//         expect(screen.getByText('Flight 3')).toBeInTheDocument();
//     });
    
//     it('should render the deleted buttons', () => {
//         expect(screen.getByText('Delete')).toBeInTheDocument();
//     });

//     it('should dispatch the deleteFlight action', () => {
//         const flightId = 1;
//         const expectedAction = {
//             type: deleteFlight.type,
//             payload: flightId,
//         };
//         expect(store.dispatch(deleteFlight(flightId))).toEqual(expectedAction);
//     });

//     it('should dispatch the deleteFlight action when the delete button is clicked', () => {
//         const flightId = 1;
//         const expectedAction = {
//             type: deleteFlight.type,
//             payload: flightId,
//         };
//         fireEvent.click(screen.getByText('Delete'));
//         expect(store.dispatch(deleteFlight(flightId))).toEqual(expectedAction);
//         expect(screen.queryByText('Flight 1')).toBeNull();
//     });

// });


// test('fetches missions if missions array is empty', async () => {
//   useSelector.mockReturnValueOnce({
//     missions: [],
//     loading: false,
//   });

//   render(<Missions />);

//   await waitFor(() => {
//     expect(fetchMissions).toHaveBeenCalled();
//   });
// });

// test('renders loading message when loading is true', () => {
//   useSelector.mockReturnValueOnce({
//     missions: [],
//     loading: true,
//   });

//   const { getByText } = render(<Missions />);

//   const loadingMessage = getByText('Loading...');
//   expect(loadingMessage).toBeInTheDocument();
// });