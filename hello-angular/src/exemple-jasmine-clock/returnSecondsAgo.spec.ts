import { returnSecondsAgo } from "./returnSecondsAgo"

describe('returnSecondsAgo', () => {
  beforeEach(() => {
    jasmine.clock().install();
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it('should return difference in second from now', () => {
    jasmine.clock().mockDate(new Date('2024-10-14 15:42:00'));
    expect(returnSecondsAgo(new Date('2024-10-14 15:41:00'))).toBe(60000);
  })

  it('should not be impacted', () => {
    console.log(Date.now());
  })
})
