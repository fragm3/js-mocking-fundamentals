const thumbWar = require('../thumb-war');
const utils = require('../utils');

test('returns winner', () => {
  const originalGetWinner = utils.getWinner;
  utils.getWinner = jest.fn((p1, p2) => p1);
  const winner = thumbWar('A', 'B');
  console.log(utils.getWinner.mock.calls);

  expect(utils.getWinner.mock.calls).toEqual([
    ['A', 'B'],
    ['A', 'B'],
  ]);
  expect(winner).toBe('A');
  expect(utils.getWinner).toHaveBeenCalledTimes(2);

  expect(utils.getWinner).toHaveBeenCalledWith('A', 'B');

  expect(utils.getWinner).toHaveBeenNthCalledWith(1, 'A', 'B');

  expect(utils.getWinner).toHaveBeenNthCalledWith(2, 'A', 'B');

  utils.getWinner = originalGetWinner;
});
