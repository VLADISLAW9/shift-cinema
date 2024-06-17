import type { Ticket } from '@/entities/Ticket';

export interface Seance {
  date: string;
  time: string;
}
export interface PurchasedTickets {
  row: number;
  column: number;
  price: number;
}

export interface Place {
  price: number;
  type: 'ECONOM' | 'BLOCKED' | 'COMFORT';
}

export interface Hall {
  name: 'Red' | 'Blue' | 'Purple';
  places: Place[][];
}

export interface ScheduleSeance {
  time: string;
  hall: Hall;
  payedTickets: Ticket[];
}

export interface Schedule {
  date: string;
  seances: ScheduleSeance[];
}
