import { formatPlacesToString } from './formatPlacesToString';

describe('formatPlacesToString', () => {
  test('should format places (row 1 - 1)', () => {
    const inputData = [{ row: 1, column: 1 }];
    const expectedOutput = '1 ряд - 1';

    expect(formatPlacesToString(inputData)).toEqual(expectedOutput);
  });

  test('should format places (row 1 - 1, 2)', () => {
    const inputData = [
      { row: 1, column: 1 },
      { row: 1, column: 2 }
    ];
    const expectedOutput = '1 ряд - 1, 2';

    expect(formatPlacesToString(inputData)).toEqual(expectedOutput);
  });

  test('should format places (row 1 - 1, row 2 - 1)', () => {
    const inputData = [
      { row: 1, column: 1 },
      { row: 2, column: 1 }
    ];
    const expectedOutput = '1 ряд - 1 2 ряд - 1';

    expect(formatPlacesToString(inputData)).toEqual(expectedOutput);
  });
});
