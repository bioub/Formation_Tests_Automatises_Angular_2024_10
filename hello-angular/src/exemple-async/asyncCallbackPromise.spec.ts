import { asyncCallback } from "./asyncCallbackPromise";

describe('asyncCallback function', () => {
  it('should call callback', () => {
    return asyncCallback();
  });

  it('should call callback', async () => {
    await asyncCallback();

  });
});
