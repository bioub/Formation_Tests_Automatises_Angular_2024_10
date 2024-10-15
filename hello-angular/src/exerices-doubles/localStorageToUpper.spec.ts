import { localStorageToUpper } from "./localStorageToUpper";

describe('localStorageToUpper function', () => {
  it('should return null when no item', () => {
    spyOn(localStorage, 'getItem').and.returnValue(null);
    expect(localStorageToUpper('myKey')).toBeUndefined();
  });
  it('should return value uppercased when item', () => {
    spyOn(localStorage, 'getItem').and.returnValue('abc');
    expect(localStorageToUpper('myKey')).toBe('ABC');
  });
})
