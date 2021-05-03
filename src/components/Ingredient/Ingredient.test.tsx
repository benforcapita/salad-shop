import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Ingredient from './Ingredient';
import { SaladIngredientsItem } from "../../Types";

var mokeData:SaladIngredientsItem = {
  name:'Test',price:2,amount:2
}

describe('<Ingredient />', () => {
  test('it should mount', () => {
    render(<Ingredient item={mokeData} handleAddToCart={mokeData=>{console.log('success')}} />);
    
    const ingredient = screen.getByTestId('Ingredient');

    expect(ingredient).toBeInTheDocument();
  });
});