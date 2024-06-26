import type { Seance } from '@/entities/Film';

export interface Ticket {
  _id: string;
  row: number;
  column: number;
  seance: Seance;
  phone: string;
}
