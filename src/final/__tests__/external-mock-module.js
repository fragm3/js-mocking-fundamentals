const thumbWar = require('../../thumb-war');
const utilsMock = require('../../utils');

jest.mock('../../utils');

test('returns winner', () => {
  const winner = thumbWar('A', 'B');
  expect(winner).toBe('A');
  expect(utilsMock.getWinner.mock.calls).toEqual([
    ['A', 'B'],
    ['A', 'B'],
  ]);

  // cleanup
  utilsMock.getWinner.mockReset();
});
