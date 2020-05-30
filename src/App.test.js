import React from 'react';
import App from './App';
import { render, fireEvent } from '@testing-library/react';

it('should render component', () => {
  const mockFn = jest.fn();
  const app = render(<App onClick={mockFn} />);
  fireEvent.click(app.getByText('+'));
  expect(mockFn).toHaveBeenCalledTimes(0);
  //   console.log(app.getByText('counter: 0'));
  //   expect(app.getByText('counter: 0')).toBeInTheDocument();
  //   fireEvent.click(app.getByText('+'));
  //   expect(app.getByText('counter: 1')).toBeInTheDocument();
});
