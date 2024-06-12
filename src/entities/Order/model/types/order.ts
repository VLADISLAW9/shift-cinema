import type { Ticket } from '@/entities/Ticket';

export interface Order {
  filmName: string;
  orderNumber: number;
  tickets: Ticket[];
}
