import type { FilmScheduleResponseSchema } from '@/entities/Film/api/useGetFilmScheduleByIdQuery';
import { convertDate } from '@/shared/lib/utils/convertDate';
import type { RadioGroupItem } from '@/shared/ui/Selectors/RadioGroup';

export const getScheduleItems = (data?: FilmScheduleResponseSchema, seanceDate?: string) => {
  const dateItems: RadioGroupItem<string>[] | undefined = data?.schedules.map((schedule) => ({
    value: schedule.date,
    content: convertDate(schedule.date, 'ddd, DD MMM')
  }));

  const redHallItems: RadioGroupItem<string>[] = [];
  const blueHallItems: RadioGroupItem<string>[] = [];
  const violetHallItems: RadioGroupItem<string>[] = [];

  if (data?.schedules && data.schedules.length > 0) {
    const selectedSchedule = data.schedules.find((schedule) => schedule.date === seanceDate);

    if (selectedSchedule && selectedSchedule.seances) {
      selectedSchedule.seances.forEach((seance) => {
        if (seance.hall.name === 'Red') {
          redHallItems.push({
            value: seance.time,
            content: seance.time
          });
        } else if (seance.hall.name === 'Blue') {
          blueHallItems.push({
            value: seance.time,
            content: seance.time
          });
        } else if (seance.hall.name === 'Violet') {
          violetHallItems.push({
            value: seance.time,
            content: seance.time
          });
        }
      });
    }
  }

  return { dateItems, redHallItems, blueHallItems, violetHallItems };
};
