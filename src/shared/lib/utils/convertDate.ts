import moment from 'moment/min/moment-with-locales';

import 'moment/locale/ru';

moment.locale('ru');

export function convertDate(inp: string, format: string) {
  return moment(inp, 'DD.MM.YYYY').format(format);
}
