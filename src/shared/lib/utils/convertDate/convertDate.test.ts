import { convertDate } from './convertDate';

describe('convertDate', () => {
  test('should convert date from DD.MM.YYYY to the specified format', () => {
    const inputDate = '01.01.2022';
    const outputFormat = 'MMMM D, YYYY';
    const expectedOutput = 'январь 1, 2022';

    expect(convertDate(inputDate, outputFormat)).toEqual(expectedOutput);
  });
});
