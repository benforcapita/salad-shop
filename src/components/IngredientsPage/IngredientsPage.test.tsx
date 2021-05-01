import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import IngredientsPage from './IngredientsPage';

describe('<IngredientsPage />', () => {
  test('it should mount', () => {
    render(<IngredientsPage />);
    
    const ingredientsPage = screen.getByTestId('IngredientsPage');

    expect(ingredientsPage).toBeInTheDocument();
  });
});