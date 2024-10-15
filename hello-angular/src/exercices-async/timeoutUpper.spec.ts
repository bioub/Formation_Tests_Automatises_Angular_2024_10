import { timeoutUpper } from "./timeoutUpper";

describe('timeoutUpper function', () => {
  it('should call callback with uppercased value', (done) => {
    timeoutUpper('abc', (val) => {
      expect(val).toBe('ABC');
      done();
    });
  });
});
