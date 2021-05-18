const assert = require('assert');
const thumbWar = require('../../thumb-war');
const utils = require('../../utils');

function fn(impl) {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args);
    return impl(...args);
  };
  mockFn.mock = { calls: [] };
  mockFn.mockImplementation = (newImpl) => (impl = newImpl);
  return mockFn;
}

function spyOn(object, prop) {
  const originalValue = object[prop];
  object[prop] = fn(originalValue);
  object[prop].mockRestore = () => (object[prop] = originalValue);
}

spyOn(utils, 'getWinner');

utils.getWinner.mockImplementation((p1, p2) => p1);

const winner = thumbWar('A', 'B');

assert.strictEqual(winner, 'A');
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ['A', 'B'],
  ['A', 'B'],
]);

utils.getWinner.mockRestore();
