import App from '@app/App';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

test('count is 0 at first', () => {
  render(<App />);

  expect(screen.getByText('count is: 0')).toBeDefined();
});

test('increments count', () => {
  render(<App />);

  fireEvent.click(screen.getByText('count is: 0'));

  expect(screen.getByText('count is: 1')).toBeDefined();
});
