import { sumWithCallback } from "./sumWithCallback";

describe('sumWithCallback function', () => {
  it('should call endCallback with result', () => {
    const spy = jasmine.createSpy().and.callFake((result) => `Hello ${result}`);

    sumWithCallback(1, 2, spy)

    expect(spy).toHaveBeenCalledOnceWith(3);
  });
});
