import App from '../App';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { MemoryRouter } from 'react-router-dom';

test('full app rendering/navigating', () => {
  render(<App />, { wrapper: MemoryRouter });

  expect(screen.getByText(/welcome/i)).toBeInTheDocument();
});

test('When user clicks on "Contact" in nav, they see a "Thank you!" text', () => {
  render(<App />, { wrapper: MemoryRouter });

  const leftClick = { button: 0 };
  userEvent.click(screen.getByText(/contact/i), leftClick);

  expect(screen.getByText(/thank you/i)).toBeInTheDocument();
});

test('When user clicks on "Articles" in nav, they see a "Newest articles" text', () => {
  render(<App />, { wrapper: MemoryRouter });

  const leftClick = { button: 0 };
  userEvent.click(screen.getByText(/articles/i), leftClick);

  expect(screen.getByText(/newest articles/i)).toBeInTheDocument();
});
