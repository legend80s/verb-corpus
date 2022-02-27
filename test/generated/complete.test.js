import { describe, it, expect } from 'vitest';

const { complete: verbs } = require('../..')

describe('Complete Verbs', () => {
  it('"stipulate" should be included in the verb list', () => {
    const input = 'stipulate';
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

  it('"apply" should be included in the verb list', () => {
    const input = 'apply';
    const actual = verbs.filter(v => v === input).length;
    const expected = 1;

    expect(actual).toEqual(expected);
  });

  it('"extract" should be included in the verb list', () => {
    const input = 'extract';
    const actual = verbs.filter(v => v === input).length;
    const expected = 1;

    expect(actual).toEqual(expected);
  });

  it('"get" should be included in the verb list', () => {
    const input = 'get';
    const actual = verbs.filter(v => v === input).length;
    const expected = 1;

    expect(actual).toEqual(expected);
  });

  it('"set" should be included in the verb list', () => {
    const input = 'set';
    const actual = verbs.filter(v => v === input).length;
    const expected = 1;

    expect(actual).toEqual(expected);
  });

  it('"make" should be included in the verb list', () => {
    const input = 'make';
    const actual = verbs.filter(v => v === input).length;
    const expected = 1;

    expect(actual).toEqual(expected);
  });

  it('"generate" should be included in the verb list', () => {
    const input = 'generate';
    const actual = verbs.filter(v => v === input).length;
    const expected = 1;

    expect(actual).toEqual(expected);
  });

  it('"book" should be included in the verb list', () => {
    const input = 'book';
    const actual = verbs.filter(v => v === input).length;
    const expected = 1;

    expect(actual).toEqual(expected);
  });

  it('"do" should be included in the verb list', () => {
    const input = 'do';
    const actual = verbs.filter(v => v === input).length;
    const expected = 1;

    expect(actual).toEqual(expected);
  });

  it('"mask" should be included in the verb list', () => {
    const input = 'mask';
    const actual = verbs.filter(v => v === input).length;
    const expected = 1;

    expect(actual).toEqual(expected);
  });

  it('"query" should be included in the verb list', () => {
    const input = 'query';
    const actual = verbs.filter(v => v === input).length;
    const expected = 1;

    expect(actual).toEqual(expected);
  });

  it('"resume" should be included in the verb list', () => {
    const input = 'resume';
    const actual = verbs.filter(v => v === input).length;
    const expected = 1;

    expect(actual).toEqual(expected);
  });

  it('"is" should be included in the verb list', () => {
    const input = 'is';
    const actual = verbs.filter(v => v === input).length;
    const expected = 1;

    expect(actual).toEqual(expected);
  });

  it('"should" should be included in the verb list', () => {
    const input = 'should';
    const actual = verbs.filter(v => v === input).length;
    const expected = 1;

    expect(actual).toEqual(expected);
  });

  it('"has" should be included in the verb list', () => {
    const input = 'has';
    const actual = verbs.filter(v => v === input).length;
    const expected = 1;

    expect(actual).toEqual(expected);
  });

  it('"cat" should not be included in the verb list', () => {
    const input = 'cat';
    const actual = verbs.filter(v => v === input).length;
    const expected = 0;

    expect(actual).toEqual(expected);
  });

  it('"dog" should not be included in the verb list', () => {
    const input = 'dog';
    const actual = verbs.filter(v => v === input).length;
    const expected = 0;

    expect(actual).toEqual(expected);
  });

  it('"module" should not be included in the verb list', () => {
    const input = 'module';
    const actual = verbs.filter(v => v === input).length;
    const expected = 0;

    expect(actual).toEqual(expected);
  });

  it('"charge" should be included in the verb list', () => {
    const input = 'charge';
    const actual = verbs.filter(v => v === input).length;
    const expected = 1;

    expect(actual).toEqual(expected);
  });

  it('"recharge" should be included in the verb list', () => {
    const input = 'recharge';
    const actual = verbs.filter(v => v === input).length;
    const expected = 1;

    expect(actual).toEqual(expected);
  });
});
