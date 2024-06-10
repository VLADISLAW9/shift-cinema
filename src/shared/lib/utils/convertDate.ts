import moment from 'moment/min/moment-with-locales';

import 'moment/locale/ru';

moment.locale('ru');

/**
 * Converts a date string from 'DD.MM.YYYY' format to the specified format using Moment.js.
 *
 * @param {string} inp - The input date string in 'DD.MM.YYYY' format.
 * @param {string} format - The desired output format.
 * @return {string} The formatted date string.
 */
export function convertDate(inp: string, format: string) {
  return moment(inp, 'DD.MM.YYYY').format(format);
}
