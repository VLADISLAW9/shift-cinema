import type { Seance } from '@/entities/Film';

export interface Ticket {
  filmId: string;
  row: number;
  column: number;
  seance: Seance;
  phone: string;
}
