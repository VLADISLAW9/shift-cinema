import { convertPhoneToString } from './convertPhoneToString';

describe('convertPhoneToString', () => {
  test('should convert phone number', () => {
    const inputData = '+7 999 999 99 99';
    const expectedOutput = '79999999999';

    expect(convertPhoneToString(inputData)).toEqual(expectedOutput);
  });
});
