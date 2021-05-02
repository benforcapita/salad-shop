import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CartItem from './CartItem';

describe('<CartItem />', () => {
  test('it should mount', () => {
    render(<CartItem />);
    
    const cartItem = screen.getByTestId('CartItem');

    expect(cartItem).toBeInTheDocument();
  });
});