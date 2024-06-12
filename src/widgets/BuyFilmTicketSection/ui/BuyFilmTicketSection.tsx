import { memo, useState } from 'react';

import { useUserStore } from '@/entities/User/model/store/useUserStore';
import { FilmHallPlaceSelect } from '@/features/FilmHallPlaceSelect';
import { FilmScheduleSelect } from '@/features/FilmScheduleSelect';
import { FilmUserDataModal } from '@/features/FilmUserData';
import { classNames } from '@/shared/lib/classNames/classNames';
import { convertDate } from '@/shared/lib/utils/convertDate';
import { formatPlacesToString } from '@/shared/lib/utils/formatPlacesToString';
import { Button } from '@/shared/ui/Button/Button';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Typography } from '@/shared/ui/Typography';

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
    <VStack gap='32' className={classNames('', {}, [className])}>
      <FilmScheduleSelect
        hall={hall}
        seance={seance}
        setSeanceDate={setSeanceDate}
        setSeanceTime={setSeanceTime}
        setHall={setHall}
        pageId={pageId}
      />
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
