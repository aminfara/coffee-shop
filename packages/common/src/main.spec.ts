import { helloWorld } from '@cs/common';

describe('helloWorld', () => {
  it('should return hello world', () => {
    expect(helloWorld()).toBe('Hello World!');
  });
});
