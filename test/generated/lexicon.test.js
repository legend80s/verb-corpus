import { describe, it, expect } from 'vitest';

const { lexicon: verbs } = require('../..');

describe('Lexicon Verbs', () => {
  it('"stipulate" should be included in the verb list', () => {
    const input = 'stipulate';
    const actual = verbs.filter(v => v === input).length;
    const expected = 1;

    expect(actual).toEqual(expected);
  });

  it('"uglify" should NOT be included in the verb list', () => {
    const input = 'uglify';
    const actual = verbs.filter(v => v === input).length;
    const expected = 0;

    expect(actual).toEqual(expected);
  });
});
