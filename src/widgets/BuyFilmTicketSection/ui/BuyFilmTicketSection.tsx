import { memo } from 'react';

import { FilmScheduleSelect } from '@/features/FilmScheduleSelect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';

import { useBuyFilmTicketStore } from '../model/store/useBuyFilmTicketStore';

interface BuyFilmTicketSectionProps {
  className?: string;
  pageId: string;
}

export const BuyFilmTicketSection = memo((props: BuyFilmTicketSectionProps) => {
  const { className, pageId } = props;

  const { seanceDate, setSeanceDate, seanceTime, setSeanceTime } = useBuyFilmTicketStore();

  return (
    <VStack gap='32' className={classNames('', {}, [className])}>
      <FilmScheduleSelect
        seanceDate={seanceDate}
        setSeanceDate={setSeanceDate}
        seanceTime={seanceTime}
        setSeanceTime={setSeanceTime}
        pageId={pageId}
      />
    </VStack>
  );
});
