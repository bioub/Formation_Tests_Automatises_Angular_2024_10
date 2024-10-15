import { dejaSaisis } from "./dejaSaisis";

describe('dejaSaisis function', () => {
  it('should return hello followed by name', () => {
    expect(dejaSaisis([50, 12, 25])).toBe('Vous avez déjà saisi : 50 | 12 | 25');
  });

  it('should return hello followed by name', () => {
    expect(dejaSaisis([])).toBeUndefined();
  });
});
