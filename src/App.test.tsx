import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders search input', () => {
  render(<App />);
  const inputElement = screen.getAllByPlaceholderText(/search/i);
  expect(inputElement[0]).toBeInTheDocument();
});
