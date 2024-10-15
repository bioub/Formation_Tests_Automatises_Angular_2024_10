import { timeoutUpper } from "./timeoutUpper";

describe('timeoutUpper function', () => {
  it('should call callback with uppercased value (with spyOn)', () => {
    function fakeSetTimeout(cb: () => void, delay: number) {
      cb();
    }

    spyOn(window, 'setTimeout').and.callFake(fakeSetTimeout as any)

    timeoutUpper('abc', (val) => {
      expect(val).toBe('ABC');
    });
  });

  it('should call callback with uppercased value (with spyOn)', () => {
    function fakeSetTimeout(cb: () => void, delay: number) {
      cb();
    }

    spyOn(window, 'setTimeout').and.callFake(fakeSetTimeout as any)
    const spy = jasmine.createSpy();

    timeoutUpper('abc', spy);
    expect(spy).toHaveBeenCalledOnceWith('ABC');
  });

  it('should call callback with uppercased value (with spyOn)', () => {
    jasmine.clock().install();
    const spy = jasmine.createSpy();

    timeoutUpper('abc', spy);
    jasmine.clock().tick(1000);
    expect(spy).toHaveBeenCalledOnceWith('ABC');
    jasmine.clock().uninstall();
  });
});
