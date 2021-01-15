import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('Render the component', () => {
  const values = ['test1', 'test2'];

  const [value1, value2] = values;

  render(<App values={values} />);

  // const buttonElement = screen.getByText(/button/i);

  // expect(buttonElement).toBeInTheDocument();

  // expect(screen.getByText(value2)).toBeInTheDocument();
  // expect(screen.queryByText(value1)).not.toBeInTheDocument();

  // userEvent.click(buttonElement);
  // expect(screen.getByText(value1)).toBeInTheDocument();
  // expect(screen.queryByText(value2)).not.toBeInTheDocument();
});
