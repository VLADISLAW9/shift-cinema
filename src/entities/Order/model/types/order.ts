import type { Ticket } from '@/entities/Ticket';

export interface Order {
  _id: string;
  filmName: string;
  orderNumber: number;
  tickets: Ticket[];
  status: 'PAYED' | 'CANCELED';
}
