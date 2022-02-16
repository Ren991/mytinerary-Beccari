import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  <h1>hola</h1>
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
