export interface Seance {
  date: string;
  time: string;
}

export interface Ticket {
  filmId: string;
  row: number;
  column: number;
  seance: Seance;
  phone: string;
}

interface Hall {
  name: 'Red' | 'Blue' | 'Violet';
  places: any;
}

interface ScheduleSeance {
  time: string;
  hall: Hall;
  payedTickets: Ticket[];
}

export interface Schedule {
  date: string;
  seances: ScheduleSeance[];
}
