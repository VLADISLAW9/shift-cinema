import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import FilmScheduleSelect from './FilmScheduleSelect';
import { useGetFilmScheduleByIdQuery } from '@/entities/Film';
import { componentRender } from '@/shared/lib/tests'

jest.mock('@/entities/Film');

const mockData = {
  success: true,
  schedules: [
    {
      date: '01.01.2022',
      seances: [
        {
          hall: {
            name: 'Red',
            places: [[{ price: 100, type: 'ECONOM' }], [{ price: 100, type: 'ECONOM' }]],
          },
          payedTickets: [],
          time: '12:00',
        },
      ],
    },
  ],
};

describe('FilmScheduleSelect', () => {
  (useGetFilmScheduleByIdQuery as jest.Mock).mockReturnValue({
     data: mockData,
  });

  test('отображаем страницу и не видим выбор времени', () => {
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

  test('выбор даты и отображение red_hall_time_select', async () => {
    componentRender(
      <FilmScheduleSelect
        setHall={() => {}}
        setSeanceDate={() => {}}
        setSeanceTime={() => {}}
        pageId='1'
      />
    );

    await userEvent.click(screen.getByText('сб, 01 янв.'));
    
    expect(screen.getByTestId('red_hall_time_select')).toBeInTheDocument();
  });
});
