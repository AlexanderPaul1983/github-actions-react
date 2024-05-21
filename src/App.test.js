import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home link', () => {
  render(<App />);
  const homeLinks = screen.getAllByText(/home/i);
  // Überprüfen Sie, dass mindestens ein "Home"-Link im Dokument vorhanden ist
  expect(homeLinks.length).toBeGreaterThan(0);
  // Optional: Überprüfen Sie ein bestimmtes Element, z.B. das erste
  expect(homeLinks[0]).toBeInTheDocument();
});
