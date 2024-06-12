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

export interface PurchasedTickets {
  row: number;
  column: number;
  price: number;
}

export interface Place {
  price: 0;
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
