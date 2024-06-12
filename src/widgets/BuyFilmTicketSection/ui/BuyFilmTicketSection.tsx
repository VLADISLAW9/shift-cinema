import { memo, Suspense, useState } from 'react';
import { classNames } from '@lib/classNames/classNames';
import { convertDate } from '@lib/utils/convertDate';
import { formatPlacesToString } from '@lib/utils/formatPlacesToString';
import { Button } from '@ui/Button/Button';
import { Skeleton } from '@ui/Skeleton/Skeleton';
import { HStack, VStack } from '@ui/Stack';
import { Typography } from '@ui/Typography';

import { useUserStore } from '@/entities/User';
import { FilmHallPlaceSelect } from '@/features/FilmHallPlaceSelect';
import { FilmScheduleSelect } from '@/features/FilmScheduleSelect';
import { FilmUserDataModal } from '@/features/FilmUserData';

import { calculateTotalTicketCost } from '../model/lib/utils/countTicketsPrice';
import { useBuyFilmTicketStore } from '../model/store/useBuyFilmTicketStore';

import cls from './BuyFilmTicketSection.module.scss';

interface BuyFilmTicketSectionProps {
  className?: string;
  pageId: string;
}

export const BuyFilmTicketSection = memo((props: BuyFilmTicketSectionProps) => {
  const { className, pageId } = props;

  const {
    seance,
    setSeanceDate,
    setSeanceTime,
    setHall,
    hall,
    setTickets,
    tickets,
    setPersonMiddleName,
    setPersonFirstName,
    setPersonLastName,
    setPersonPhone,
    setFilmId
  } = useBuyFilmTicketStore();

  const { isLoggedIn } = useUserStore();

  const [isOpenUserData, setIsOpenUserData] = useState(false);

  return (
    <VStack gap='32' className={className}>
      <Suspense
        fallback={
          <VStack gap='16'>
            <Skeleton width={150} height={25} />
            <Skeleton width={700} height={25} />
          </VStack>
        }
      >
        <FilmScheduleSelect
          hall={hall}
          seance={seance}
          setSeanceDate={setSeanceDate}
          setSeanceTime={setSeanceTime}
          setHall={setHall}
          pageId={pageId}
        />
      </Suspense>
      {hall && seance?.time && seance?.date && (
        <HStack max gap='48' align='end'>
          <FilmHallPlaceSelect hall={hall} tickets={tickets} setTickets={setTickets} />
          <VStack max gap='24'>
            <VStack>
              <Typography variant='typography12_regular'>Зал</Typography>
              <Typography variant='typography16_regular'>{hall.name}</Typography>
            </VStack>
            <VStack>
              <Typography variant='typography12_regular'>Дата и время</Typography>
              <Typography variant='typography16_regular'>
                {convertDate(seance?.date, 'D MMM,')} {seance?.time}
              </Typography>
            </VStack>
            {!!tickets?.length && (
              <>
                <VStack>
                  <Typography variant='typography12_regular'>Места</Typography>
                  <Typography variant='typography16_medium'>
                    {formatPlacesToString(tickets)}
                  </Typography>
                </VStack>
                <VStack>
                  <Typography tag='h3' variant='typography20_medium'>
                    Сумма: {calculateTotalTicketCost(tickets)} ₽
                  </Typography>
                </VStack>
                <Button
                  disabled={!isLoggedIn}
                  onClick={() => setIsOpenUserData(true)}
                  className={cls.buy_ticket_button}
                >
                  <Typography variant='typography16_semibold'>Купить</Typography>
                </Button>
              </>
            )}
          </VStack>
        </HStack>
      )}
      <FilmUserDataModal
        setPersonMiddleName={setPersonMiddleName}
        setPersonFirstName={setPersonFirstName}
        setPersonLastName={setPersonLastName}
        setPersonPhone={setPersonPhone}
        setFilmId={setFilmId}
        isOpen={isOpenUserData}
        onClose={() => setIsOpenUserData(false)}
      />
    </VStack>
  );
});
