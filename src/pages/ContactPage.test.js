import { render, screen } from '@testing-library/react';
import ContactPage from './ContactPage';

it('Contactpage contains heading 2 with text "Thank you!', () => {
  render(<ContactPage />);

  screen.getByRole('heading', { level: 2, name: 'Thank you!' });
});
it('Contactpage contains contact email', () => {
  render(<ContactPage />);

  screen.getByText('rosicovaveronika@gmail.com', { exact: false });
});
