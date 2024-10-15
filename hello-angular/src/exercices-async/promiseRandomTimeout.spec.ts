import { promiseRandomTimeout } from "./promiseRandomTimeout";

describe('promiseRandomTimeout function', () => {
  it('should call callback with uppercased value', async () => {
    const val = await promiseRandomTimeout('abc');
    expect(val).toBe('ABC');
  })
});
