import { asyncCallback } from "./asyncCallback";

describe('asyncCallback function', () => {
  it('should call callback', (done) => {
    function cb() {
      // le test sera terminé avant l'appel du callback
      expect(true).toBe(true);
      done();
    }
    asyncCallback(cb);
  });
});
