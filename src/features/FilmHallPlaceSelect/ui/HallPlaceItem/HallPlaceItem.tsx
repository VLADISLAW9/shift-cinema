import { memo, useRef } from 'react';
import { useHover } from '@siberiacancode/reactuse';

import type { Place, PurchasedTickets } from '@/entities/Film';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Checkbox } from '@/shared/ui/Checkbox/Checkbox';
import { Typography } from '@/shared/ui/Typography';

import cls from './HallPlaceItem.module.scss';

interface HallPlaceItemProps {
  className?: string;
  place: Place;
  columnIndex: number;
  enabled?: boolean;
  disabled?: boolean;
  rowIndex: number;
  tickets?: PurchasedTickets[];
  onSelectPlace: (row: number, column: number, price: number, isEnabled: boolean) => void;
}

export const HallPlaceItem = memo((props: HallPlaceItemProps) => {
  const { className, onSelectPlace, columnIndex, rowIndex, place, tickets, disabled } = props;

  const column = columnIndex + 1;
  const row = rowIndex + 1;

  const hoverRef = useRef<HTMLDivElement>(null);
  const isHover = useHover(hoverRef);

  const isEnabled =
    tickets?.some((ticket) => ticket.column === column && ticket.row === row) ?? false;

  return (
    <Checkbox
      disabled={disabled}
      enabled={isEnabled}
      className={className}
      ref={hoverRef}
      setEnabled={() => onSelectPlace(row, column, place.price, isEnabled)}
    >
      <div
        className={classNames(cls.hall_matrix_place, {
          [cls.disabled_place]: disabled,
          [cls.enabled_place]: isEnabled
        })}
      >
        {(isHover || isEnabled) && !disabled && (
          <Typography className={cls.hall_matrix_place_text} variant='typography12_regular'>
            {column}
          </Typography>
        )}
      </div>
    </Checkbox>
  );
});
