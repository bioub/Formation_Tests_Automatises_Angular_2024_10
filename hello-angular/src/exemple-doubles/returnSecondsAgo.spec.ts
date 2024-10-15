import { returnSecondsAgo } from "./returnSecondsAgo"

describe('returnSecondsAgo', () => {
  it('should return difference in second from now', () => {
    spyOn(Date, 'now').and.returnValue((new Date('2024-10-14 15:42:00')).getTime())
    expect(returnSecondsAgo(new Date('2024-10-14 15:41:00'))).toBe(60000);
  })

  it('should not be impacted', () => {
    console.log(Date.now());
  })
})
