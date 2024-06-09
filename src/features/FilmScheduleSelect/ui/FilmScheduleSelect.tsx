import { memo } from 'react';
import { classNames } from '@lib/classNames/classNames';
import { convertDate } from '@lib/utils/convertDate';
import type { RadioGroupItem } from '@ui/RadioGroup';
import { RadioGroup } from '@ui/RadioGroup';
import { VStack } from '@ui/Stack';
import { Typography } from '@ui/Typography';

import { useGetFilmScheduleByIdQuery } from '@/entities/Film';

import { getGroupTimeItems } from '../model/selectors/getGroupTimeItems';

interface FilmScheduleSelectProps {
  className?: string;
  pageId: string;
  seanceDate?: string;
  seanceTime?: string;
  setSeanceDate: (value: string) => void;
  setSeanceTime: (value: string) => void;
}

export const FilmScheduleSelect = memo((props: FilmScheduleSelectProps) => {
  const { className, pageId, setSeanceDate, setSeanceTime, seanceDate, seanceTime } = props;

  const { data } = useGetFilmScheduleByIdQuery(pageId);

  console.log(data);

  const dateItems: RadioGroupItem<string>[] | undefined = data?.schedules.map((schedule) => ({
    value: schedule.date,
    content: convertDate(schedule.date, 'ddd, DD MMM')
  }));

  const { blueHallItems, redHallItems, violetHallItems } = getGroupTimeItems(data, seanceDate);

  return (
    <VStack gap='24' className={classNames('', {}, [className])}>
      <Typography variant='typography24_bold'>Расписание</Typography>
      <VStack gap='32'>
        <RadioGroup
          variant='segmented'
          value={seanceDate}
          onChange={setSeanceDate}
          items={dateItems}
        />
        {redHallItems.length > 0 && (
          <RadioGroup
            variant='tabs'
            label='Красный зал'
            value={seanceTime}
            onChange={setSeanceTime}
            items={redHallItems}
          />
        )}
        {redHallItems.length > 0 && (
          <RadioGroup
            variant='tabs'
            label='Синий зал'
            value={seanceTime}
            onChange={setSeanceTime}
            items={blueHallItems}
          />
        )}
        {violetHallItems.length > 0 && (
          <RadioGroup
            variant='tabs'
            label='Фиолетовый зал'
            value={seanceTime}
            onChange={setSeanceTime}
            items={violetHallItems}
          />
        )}
      </VStack>
    </VStack>
  );
});
