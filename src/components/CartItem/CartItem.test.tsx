import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CartItem from './CartItem';
import { SaladIngredientsItem } from "../../Types";
import { Provider } from 'react-redux';
import store from "../../store";
import { QueryClient, QueryClientProvider } from 'react-query';


var mokeData:SaladIngredientsItem = {
  name:'Test',price:2,amount:2
}

describe('<CartItem />', () => {
  test('it should mount', () => {
    render(
    <Provider store={store}>
    <CartItem item={mokeData} index={0} />
    </Provider>
    
    );
    
    const cartItem = screen.getByTestId('CartItem');

    expect(cartItem).toBeInTheDocument();
  });
});