import { describe, it, expect } from 'vitest';

const { programming: verbs } = require('../..')

describe('Programming Verbs', () => {
  [
    'deal',
    'derive',
    'poll',
    'sleep',
    'catch',
    'blur',
    'cancel',
    'batch',
    'click',
    'compute',
    'draw',
    'freeze',
    'unfreeze',
    'fund',
    'pay',
    'pre',
    'preview',
    'prompt',
    'recommend',
    'retry',
    'revoke',
    'stick',
    'sync',
    'whether',
  ].forEach((word) => {
    it(`"${word}" should be included in the verb list`, () => {
      const input = word;
      const actual = verbs.filter(v => v === input).length;
      const expected = 1;

      expect(actual).toEqual(expected);
    });
  });

  [
    'expo',
    'success',
  ].forEach((word) => {
    it(`"${word}" is not a verb`, () => {
      const input = word;
      const actual = verbs.filter(v => v === input).length;
      const expected = 0;

      expect(actual).toEqual(expected);
    });
  });

  it('"format" should be included in the verb list', () => {
    const input = 'format';
    const actual = verbs.filter(v => v === input).length;
    const expected = 1;

    expect(actual).toEqual(expected);
  });

  it('"toast" should be included in the verb list', () => {
    const input = 'toast';
    const actual = verbs.filter(v => v === input).length;
    const expected = 1;

    expect(actual).toEqual(expected);
  });

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

  it('"go" should be included in the verb list', () => {
    const input = 'go';
    const actual = verbs.filter(v => v === input).length;
    const expected = 1;

    expect(actual).toEqual(expected);
  });

  it('"disclaim" should be included in the verb list', () => {
    const input = 'disclaim';
    const actual = verbs.filter(v => v === input).length;
    const expected = 1;

    expect(actual).toEqual(expected);
  });

  it('"expose" should be included in the verb list', () => {
    const input = 'expose';
    const actual = verbs.filter(v => v === input).length;
    const expected = 1;

    expect(actual).toEqual(expected);
  });

  it('"choose" should be included in the verb list', () => {
    const input = 'choose';
    const actual = verbs.filter(v => v === input).length;
    const expected = 1;

    expect(actual).toEqual(expected);
  });

  it('"key" should NOT be included in the verb list', () => {
    const input = 'key';
    const actual = verbs.filter(v => v === input).length;
    const expected = 0;

    expect(actual).toEqual(expected);
  });

  it('"stipulate" should NOT be included in the verb list', () => {
    const input = 'stipulate';
    const actual = verbs.filter(v => v === input).length;
    const expected = 0;

    expect(actual).toEqual(expected);
  });
});
