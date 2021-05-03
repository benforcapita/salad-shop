import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import IngredientsPage from './IngredientsPage';
import { Provider } from 'react-redux';
import store from '../../../store';
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient();


describe('<IngredientsPage />', () => {
  test('it should mount', () => {
    render(
      <Provider store={store}>
        < QueryClientProvider client = { client } >
        <IngredientsPage />
      </QueryClientProvider>
      </Provider>
    );
    
    const ingredientsPage = screen.getByTestId('IngredientsPage');

    expect(ingredientsPage).toBeInTheDocument();
  });
});