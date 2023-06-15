import { describe, expect, it } from 'vitest';
import { sayHello } from './hello.js';

describe('hello', () => {
  it('should say hello to the passed name', () => {
    expect(sayHello('test')).toEqual('Hello test!');
  });
});
