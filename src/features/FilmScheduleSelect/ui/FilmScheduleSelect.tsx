import { memo, useCallback } from 'react';
import { classNames } from '@lib/classNames/classNames';
import { RadioGroup } from '@ui/RadioGroup';
import { VStack } from '@ui/Stack';
import { Typography } from '@ui/Typography';

import type { Hall, Seance } from '@/entities/Film';
import { useGetFilmScheduleByIdQuery } from '@/entities/Film';

import { getScheduleItems } from '../model/selectors/getScheduleItems';

interface FilmScheduleSelectProps {
  className?: string;
  pageId: string;
  seance?: Partial<Seance>;
  setHall: (value: Hall) => void;
  setSeanceDate: (value: string) => void;
  setSeanceTime: (value: string) => void;
}

export const FilmScheduleSelect = memo((props: FilmScheduleSelectProps) => {
  const { className, pageId, setSeanceDate, setSeanceTime, seance, setHall } = props;

  const { data } = useGetFilmScheduleByIdQuery(pageId);

  const { dateItems, blueHallItems, redHallItems, violetHallItems } = getScheduleItems(
    data,
    seance?.date
  );

  const onSelectSeanceTime = useCallback(
    (value: string) => {
      setSeanceTime(value);

      const selectedSchedule = data?.schedules?.find(
        (schedule) =>
          schedule.date === seance?.date &&
          schedule.seances?.some((seanceItem) => seanceItem.time === value)
      );

      if (selectedSchedule && selectedSchedule.seances?.length > 0) {
        const selectedSeance = selectedSchedule.seances.find(
          (seanceItem) => seanceItem.time === value
        );
        if (selectedSeance) {
          setHall(selectedSeance.hall);
        }
      }
    },
    [data?.schedules, seance?.date, setHall, setSeanceTime]
  );

  return (
    <VStack gap='24' className={classNames('', {}, [className])}>
      <Typography variant='typography24_bold'>Расписание</Typography>
      <VStack gap='32'>
        <RadioGroup
          variant='segmented'
          value={seance?.date}
          onChange={setSeanceDate}
          items={dateItems}
        />
        {redHallItems.length > 0 && (
          <RadioGroup
            variant='tabs'
            label='Красный зал'
            value={seance?.time}
            onChange={onSelectSeanceTime}
            items={redHallItems}
          />
        )}
        {redHallItems.length > 0 && (
          <RadioGroup
            variant='tabs'
            label='Синий зал'
            value={seance?.time}
            onChange={onSelectSeanceTime}
            items={blueHallItems}
          />
        )}
        {violetHallItems.length > 0 && (
          <RadioGroup
            variant='tabs'
            label='Фиолетовый зал'
            value={seance?.time}
            onChange={onSelectSeanceTime}
            items={violetHallItems}
          />
        )}
      </VStack>
    </VStack>
  );
});
