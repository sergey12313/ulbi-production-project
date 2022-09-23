import { describe, expect, test } from '@jest/globals';
import { classNames } from './classNames';

describe('classnames module', () => {
  test('...string', () => {
    expect(classNames('foo', 'bar')).toBe('foo bar');
  });
  test('...string', () => {
    expect(classNames('foo', 'bar')).toBe('foo bar');
  });
  test('...string + obj', () => {
    expect(classNames('foo', { bar: true })).toBe('foo bar');
  });
  test('obj with true value', () => {
    expect(classNames({ 'foo-bar': true })).toBe('foo-bar');
  });
  test('obj with false value', () => {
    expect(classNames({ 'foo-bar': false })).toBe('');
  });
  test('...obj', () => {
    expect(classNames({ foo: true }, { bar: true })).toBe('foo bar');
  });
  test('mixed', () => {
    expect(classNames('foo', { bar: true, duck: false }, 'baz', { quux: true })).toBe(
      'foo bar baz quux',
    );
  });
  test('empty string', () => {
    expect(classNames('')).toBe('');
  });
  test('0', () => {
    expect(classNames(0)).toBe('');
  });
  test('other falsy values are just ignored', () => {
    expect(classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, '')).toBe('bar 1');
  });
});

// console.log(classNames('foo', 'bar')); // => 'foo bar'
//
// console.log(classNames('foo', { bar: true })); // => 'foo bar'
// console.log(classNames({ 'foo-bar': true })); // => 'foo-bar'
// console.log(classNames({ 'foo-bar': false })); // => ''
// console.log(classNames({ foo: true }, { bar: true })); // => 'foo bar'
// console.log(classNames({ foo: true, bar: true })); // => 'foo bar'
// console.log(classNames('foo', { bar: true, duck: false }, 'baz', { quux: true })); // => 'foo bar baz quux'
//
// // other falsy values are just ignored
// console.log(classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, '')); // => 'bar 1'
