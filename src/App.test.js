import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const newLocal = screen.getByText(/learn react/i);
  const linkElement = newLocal;
  expect(linkElement).toBeInTheDocument();
});
