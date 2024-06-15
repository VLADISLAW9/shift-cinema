import { validatePhoneNumber } from './validatePhoneNumber';

describe('validatePhoneNumber', () => {
  test('should return true', () => {
    const inputData = '+7 999 999 99 99';

    expect(validatePhoneNumber(inputData)).toBe(true);
  });

  test('should return false', () => {
    const inputData = '+7 000 00 00 00';

    expect(validatePhoneNumber(inputData)).toBe(false);
  });
});
