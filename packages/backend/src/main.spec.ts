import { helloWorld } from '@coffee-shop/backend';

describe('helloWorld', () => {
  it('should return hello world', () => {
    expect(helloWorld()).toBe('Hello World!');
  });
});
