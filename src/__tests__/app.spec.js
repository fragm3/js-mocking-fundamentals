import React from 'react';
import { render, screen } from '@testing-library/react';
//import userEvent from '@testing-library/user-event';
import { simpleFireEvent } from '../rtl/simpleFireEvent';
import userEvent from '../rtl/userEvent';
import { App } from '../App';

describe('App Component', function () {
  it('should have hello world message', function () {
    const onClickFn = jest.fn();
    render(<App onClick={onClickFn} />);
    const button = screen.getByText(/btn/i);
    userEvent.click(button);
    expect(onClickFn).toHaveBeenCalledTimes(1);
  });
});
