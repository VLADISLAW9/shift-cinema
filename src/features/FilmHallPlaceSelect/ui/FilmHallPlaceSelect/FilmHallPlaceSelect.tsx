import { useCallback } from 'react';
import { classNames } from '@lib/classNames/classNames';
import { HStack, VStack } from '@ui/Stack';
import { Typography } from '@ui/Typography';

import type { Hall, PurchasedTickets } from '@/entities/Film';

import { HallPlaceItem } from '../HallPlaceItem/HallPlaceItem';

import cls from './FilmHallPlaceSelect.module.scss';

interface FilmHallPlaceSelectProps {
  className?: string;
  hall?: Hall;
  tickets?: PurchasedTickets[];
  setTickets?: (tickets: PurchasedTickets[]) => void;
}

export const FilmHallPlaceSelect = (props: FilmHallPlaceSelectProps) => {
  const { className, hall, setTickets, tickets } = props;

  const onSelectPlace = useCallback(
    (row: number, column: number, price: number, isEnabled: boolean) => {
      if (!isEnabled) {
        return setTickets?.([...(tickets ?? []), { row, column, price }]);
      }
      return setTickets?.(
        tickets?.filter((ticket) => ticket.row !== row || ticket.column !== column) ?? []
      );
    },
    [setTickets, tickets]
  );

  return (
    <VStack max gap='24' className={classNames('', {}, [className])}>
      <Typography variant='typography24_bold'>Выбор место</Typography>
      <VStack gap='8'>
        <VStack className={cls.hall_display} max align='center'>
          <Typography variant='typography14_regular'>Экран</Typography>
        </VStack>
        <VStack>
          <Typography variant='typography14_regular'>Ряд</Typography>
        </VStack>
        <VStack gap='24'>
          {hall?.places.map((row, rowIndex) => (
            <HStack gap='24'>
              <Typography className={cls.hall_matrix_number} variant='typography16_regular'>
                {rowIndex + 1}
              </Typography>
              <HStack gap='24' key={rowIndex}>
                {row.map((place, columnIndex) => (
                  <HallPlaceItem
                    onSelectPlace={onSelectPlace}
                    place={place}
                    tickets={tickets}
                    disabled={place.type === 'BLOCKED'}
                    columnIndex={columnIndex}
                    rowIndex={rowIndex}
                  />
                ))}
              </HStack>
            </HStack>
          ))}
        </VStack>
      </VStack>
    </VStack>
  );
};
