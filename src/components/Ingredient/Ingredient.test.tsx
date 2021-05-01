import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Ingredient from './Ingredient';

describe('<Ingredient />', () => {
  test('it should mount', () => {
    render(<Ingredient />);
    
    const ingredient = screen.getByTestId('Ingredient');

    expect(ingredient).toBeInTheDocument();
  });
});