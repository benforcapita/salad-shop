import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../../store';
import Cart from './Cart';

describe('<Cart />', () => {
  test('it should mount', () => {
    render(
      <Provider store={store}>
        <Cart />
    </Provider>
    );
    
    const cart = screen.getByTestId('Cart');

    expect(cart).toBeInTheDocument();
  });
});