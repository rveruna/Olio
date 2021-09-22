import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';
import { BrowserRouter } from 'react-router-dom';

it('Homepage contains heading 1', () => {
  render(
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );

  screen.getByRole('heading', { level: 1 });
});

it('Homepage contains link to articles', () => {
  render(
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );

  expect(screen.getByRole('link')).toHaveAttribute('href', '/articles');
});
