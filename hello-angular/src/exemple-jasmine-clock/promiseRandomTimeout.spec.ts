import { promiseRandomTimeout } from "./promiseRandomTimeout";

describe('promiseRandomTimeout function', () => {
  it('should call callback with uppercased value', async () => {
    jasmine.clock().install();

    const promise = promiseRandomTimeout('abc');

    jasmine.clock().tick(1000);

    const val = await promise;
    expect(val).toBe('ABC');

    jasmine.clock().uninstall();
  })
});
