import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../../store';
import Popup from './Popup';

describe('<Popup />', () => {
  test('it should mount', () => {
    render(
      <Provider store={store}>
        <Popup isOpen={true} totalPrice={2} />
      </Provider>
    
    );
    
    const popup = screen.getByTestId('Popup');

    expect(popup).toBeInTheDocument();
  });
});