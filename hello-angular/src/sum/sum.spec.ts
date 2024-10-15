import { sum } from "./sum";

describe('sum function', () => {
  it('should add positive numbers (Given / When / Then)', () => {
    // Arrange / Act / Assert
    // Given / When / Then

    // Arrange / Given (paramètres du test)
    const nb1 = 1;
    const nb2 = 2;

    // Act / When (exécution du code à tester)
    const result = sum(nb1, nb2);

    // Assert / Then (vérification automatisées)
    expect(result).toEqual(3);
  });

  it('should add positive numbers (short)', () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
