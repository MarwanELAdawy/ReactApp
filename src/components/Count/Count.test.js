import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Count from './Count';

describe('<Count />', () => {
  test('it should mount', () => {
    render(<Count />);
    
    const count = screen.getByTestId('Count');

    expect(count).toBeInTheDocument();
  });
});