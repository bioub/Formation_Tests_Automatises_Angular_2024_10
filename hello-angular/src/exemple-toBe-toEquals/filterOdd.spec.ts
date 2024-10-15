import { filterOdd } from "./filterOdd";

describe('filterOdd function', () => {
  it('should return only odd values', () => {
    // toBe (===)
    // toEqual (deepEqual)
    // attention dans Mocha, toBe -> to.equal / toEqual -> to.deep.equal
    expect(filterOdd([1, 2, 3, 4, 5])).toEqual([1, 3, 5]);
    expect(filterOdd([1, 2, 3, 4, 5])).not.toBe([1, 3, 5]);
  })
});
