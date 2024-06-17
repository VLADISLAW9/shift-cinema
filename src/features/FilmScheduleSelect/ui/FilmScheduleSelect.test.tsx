import { screen  } from '@testing-library/dom';

import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

import FilmScheduleSelect from './FilmScheduleSelect';

describe('FilmScheduleSelect', () => {
  test('inited and time select is not to be', () => {
    componentRender(
      <FilmScheduleSelect
        setHall={() => {}}
        setSeanceDate={() => {}}
        setSeanceTime={() => {}}
        pageId='1'
      />
    );

    expect(screen.queryByTestId('red_hall_time_select')).toBeDefined();
    expect(screen.queryByTestId('blue_hall_time_select')).toBeDefined();
    expect(screen.queryByTestId('violet_hall_time_select')).toBeDefined();
  });
});
