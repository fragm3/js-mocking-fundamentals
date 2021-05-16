import React from 'react';
import { render } from '@testing-library/react';

const App = () => <h1>Hello world React!</h1>;

describe('App Component', function () {
  it('should have hello world message', function () {
    let { getByText } = render(<App />);
    expect(getByText('Hello world React!')).toMatchInlineSnapshot(`
      <h1>
        Hello world React!
      </h1>
    `);
  });
});
