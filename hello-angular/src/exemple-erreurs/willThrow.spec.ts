import { willThrow } from "./willThrow"

describe('willThrow function', () => {
  it('should throw', () => {
    expect(() => willThrow()).toThrow();
  })
})
