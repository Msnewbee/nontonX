// __tests__/index.test.js
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

test('renders homepage', () => {
  render(<Home />);
  const heading = screen.getByText(/welcome to nontonx/i);
  expect(heading).toBeInTheDocument();
});
