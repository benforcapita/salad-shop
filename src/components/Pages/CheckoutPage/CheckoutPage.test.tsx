import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../../../store';
import CheckoutPage from './CheckoutPage';

describe('<CheckoutPage />', () => {
  test('it should mount', () => {
    render(
    <Provider store={store}>
      <CheckoutPage />
    </Provider>
    
    );
    
    const checkoutPAGE = screen.getByTestId('CheckoutPage');

    expect(checkoutPAGE).toBeInTheDocument();
  });
});