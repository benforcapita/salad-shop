import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CartDrawer from './CartDrawer';

describe('<Cart />', () => {
  test('it should mount', () => {
    render(<CartDrawer />);
    
    const cart = screen.getByTestId('Cart');

    expect(cart).toBeInTheDocument();
  });
});