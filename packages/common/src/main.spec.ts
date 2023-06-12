// import { helloWorld } from '@coffee-shop/common';
import { helloWorld } from '@/common';

describe('helloWorld', () => {
  it('should return hello world', () => {
    expect(helloWorld()).toBe('Hello World!');
  });
});
