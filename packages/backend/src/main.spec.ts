import { helloWorld } from '@/backend';

describe('helloWorld', () => {
  it('should return hello world', () => {
    expect(helloWorld()).toBe('Hello World!');
  });
});
