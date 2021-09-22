import { render, screen } from '@testing-library/react';
import ErrorPage from './ErrorPage';

it('Errorpage contains text "Something went wrong"', () => {
  render(<ErrorPage />);

  screen.getByText('Something went wrong');
});
