import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../index';

test('renders Home component', () => {
  render(<Home />);
  const linkElement = screen.getByText(/NontonX/i);
  expect(linkElement).toBeInTheDocument();
});
