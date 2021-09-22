import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders app with welcome heading', () => {
  render(<App />);

  screen.getByText('Welcome to Olio', { exact: false });
});
