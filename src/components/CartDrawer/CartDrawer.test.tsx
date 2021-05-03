import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from "../../store";
import CartDrawer from './CartDrawer';

describe('<Cart />', () => {
  test('it should mount', () => {
    render(
      <Provider store={store}>
        <CartDrawer />
      </Provider>
    );
    
    const cart = screen.getByTestId('CartDrawer');

    expect(cart).toBeInTheDocument();
  });
});