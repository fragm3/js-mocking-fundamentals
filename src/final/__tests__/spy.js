const thumbWar = require('../../thumb-war');
const utils = require('../../utils');

test('returns winner', () => {
  jest.spyOn(utils, 'getWinner');
  utils.getWinner.mockImplementation((p1, p2) => p1);

  const winner = thumbWar('A', 'B');
  expect(winner).toBe('A');
  expect(utils.getWinner.mock.calls).toEqual([
    ['A', 'B'],
    ['A', 'B'],
  ]);

  // cleanup
  utils.getWinner.mockRestore();
});
