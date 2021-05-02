import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CheckoutPage from './CheckoutPage';

describe('<HomePage />', () => {
  test('it should mount', () => {
    render(<CheckoutPage />);
    
    const homePage = screen.getByTestId('CheckoutPage');

    expect(homePage).toBeInTheDocument();
  });
});