import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from './HomePage';

describe('<HomePage />', () => {
  test('it should mount', () => {
    render(
      <Router>
      <HomePage />
    </Router>
    );
    
    const homePage = screen.getByTestId('HomePage');

    expect(homePage).toBeInTheDocument();
  });
});