import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../../app/javascript/components/Navbar';

test('renders navbar links correctly', () => {
  const { getByTestId } = render(
    <Router>
      <Navbar />
    </Router>,
  );
});

test('should toggle mobile menu on icon click', () => {
  const { getByTestId } = render(
    <Router>
      <Navbar />
    </Router>,
  );

  // Get the mobile menu icon element
  const mobileMenuIcon = getByTestId('mobile-menu-icon');

  // Initially, the mobile menu should be closed
  const navbar = getByTestId('navbar');
  expect(navbar).toHaveClass('navbar');

  // Click the mobile menu icon
  fireEvent.click(mobileMenuIcon);

  // Now the mobile menu should be open
  expect(navbar).toHaveClass('navbar mobile-open');

  // Click the mobile menu icon again to close it
  fireEvent.click(mobileMenuIcon);

  // The mobile menu should be closed again
  expect(navbar).toHaveClass('navbar');
});

test('renders authorized user navigation links correctly', () => {
  // Mocking an authorized user
  const user = {
    id: 1,
    username: 'testuser',
    // other user properties
  };

  // Render the Navbar with an authorized user
  const { getByTestId } = render(
    <Router>
      <Navbar user={user} />
    </Router>,
  );

  // Get the navigation links for the authenticated user
  const flightsLink = getByTestId('flights-link');
  const deleteFlightsLink = getByTestId('delete-flights-link');
  const reserveFlightLink = getByTestId('reserve-flight-link');
  const reservationsLink = getByTestId('reservations-link');
  const addFlightLink = getByTestId('add-flight-link');

  // Assert that the navigation links are present for an authorized user
  expect(flightsLink).toBeInTheDocument();
  expect(deleteFlightsLink).toBeInTheDocument();
  expect(reserveFlightLink).toBeInTheDocument();
  expect(reservationsLink).toBeInTheDocument();
  expect(addFlightLink).toBeInTheDocument();
});
