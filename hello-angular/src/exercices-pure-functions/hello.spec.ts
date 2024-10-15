import { hello } from "./hello";

describe('hello function', () => {
  it('should return hello followed by name', () => {
    expect(hello('Romain')).toBe('Hello Romain');
  });
});
