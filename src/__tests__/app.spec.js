import React from 'react';
import { render, screen } from '@testing-library/react';
//import userEvent from '@testing-library/user-event';
import { simpleFireEvent } from '../rtl/simpleFireEvent';
import userEvent from '../rtl/userEvent';

const App = ({ onClick }) => (
  <div>
    <div>Hello world React!</div>
    <button onClick={onClick}>btn</button>
  </div>
);

test('should have hello world message', function () {
  const onClickFn = jest.fn();

  render(<App onClick={onClickFn} />);

  const button = screen.getByText(/btn/i);

  // simpleFireEvent(button, 'click');
  userEvent.click(button);

  expect(onClickFn).toHaveBeenCalledTimes(1);
});
