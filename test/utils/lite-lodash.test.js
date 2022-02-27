import { describe, it, expect } from 'vitest';

const { uniq } = require('../../utils/lite-lodash');

describe('lite-lodash', () => {
  it('should return uniq word list case insensitively', () => {
    const input = ['hello', 'world', 'hell', 'Hello'];
    const actual = uniq(input);
    const expected = ['hello', 'world', 'hell'];

    expect(actual).toEqual(expected);
  });
});
