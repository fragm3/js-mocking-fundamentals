const assert = require('assert');
const thumbWar = require('../thumb-war');
const utils = require('../utils');

const originalGetWinner = utils.getWinner;

// monkey patch to always return the same winner every time
utils.getWinner = (p1, p2) => p1;

const winner = thumbWar('A', 'B');
assert.strictEqual(winner, 'A');

// cleanup
utils.getWinner = originalGetWinner;
