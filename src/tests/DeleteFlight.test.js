import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; 
import DeleteFlight from '../../app/javascript/components/DeleteFlight';
// import { deleteFlight } from '../../app/javascript/redux/flights/flightsSlice';

// write a full comprehensive test for the handleDelete function

describe('DeleteFlight', () => {
    const mockStore = configureStore();
    const initialState = {
        flights: [
        {
            id: 1,
            name: 'Flight 1',
        },
        {
            id: 2,
            name: 'Flight 2',
        },
        {
            id: 3,
            name: 'Flight 3',
        },
        ],
    };
    const store = mockStore(initialState);
    
    beforeEach(() => {
        render(
        <Provider store={store}>
            <DeleteFlight />
        </Provider>,
        );
    });
    
    it('should render the DeleteFlight component', () => {
        expect(screen.getByText('Delete Flight')).toBeInTheDocument();
    });
    
    it('should render the flight names', () => {
        expect(screen.getByText('Flight 1')).toBeInTheDocument();
        expect(screen.getByText('Flight 2')).toBeInTheDocument();
        expect(screen.getByText('Flight 3')).toBeInTheDocument();
    });
    
    it('should render the delete buttons', () => {
        expect(screen.getByText('Delete')).toBeInTheDocument();
    });
    
    it('should render the deleted flights', () => {
        expect(screen.getByText('Deleted Flights')).toBeInTheDocument();
    });
    
    it('should render the deleted flight names', () => {
        expect(screen.getByText('Flight 1')).toBeInTheDocument();
        expect(screen.getByText('Flight 2')).toBeInTheDocument();
        expect(screen.getByText('Flight 3')).toBeInTheDocument();
    });
    
    it('should render the deleted buttons', () => {
        expect(screen.getByText('Delete')).toBeInTheDocument();
    });

    it('should dispatch the deleteFlight action', () => {
        const flightId = 1;
        const expectedAction = {
            type: deleteFlight.type,
            payload: flightId,
        };
        expect(store.dispatch(deleteFlight(flightId))).toEqual(expectedAction);
    });

    it('should dispatch the deleteFlight action when the delete button is clicked', () => {
        const flightId = 1;
        const expectedAction = {
            type: deleteFlight.type,
            payload: flightId,
        };
        fireEvent.click(screen.getByText('Delete'));
        expect(store.dispatch(deleteFlight(flightId))).toEqual(expectedAction);
        expect(screen.queryByText('Flight 1')).toBeNull();
    });

});


