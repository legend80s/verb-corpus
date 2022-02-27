import { describe, it, expect } from 'vitest';

const { programming: verbs } = require('../..')

describe('Programming Verbs', () => {
  it('"uglify" should be included in the verb list', () => {
    const input = 'uglify';
    const actual = verbs.filter(v => v === input).length;
    const expected = 1;

    expect(actual).toEqual(expected);
  });

  it('"enqueue" should be included in the verb list', () => {
    const input = 'enqueue';
    const actual = verbs.filter(v => v === input).length;
    const expected = 1;

    expect(actual).toEqual(expected);
  });

  it('"stipulate" should NOT be included in the verb list', () => {
    const input = 'stipulate';
    const actual = verbs.filter(v => v === input).length;
    const expected = 0;

    expect(actual).toEqual(expected);
  });
});
