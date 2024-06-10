import type { PurchasedTickets } from '@/entities/Film';

/**
 * Calculates the total cost of the tickets.
 *
 * @param {PurchasedTickets[]} tickets - An optional array of purchased tickets.
 * @return {number} The total cost of the tickets, or 0 if the tickets array is undefined or empty.
 */
export const calculateTotalTicketCost = (tickets?: PurchasedTickets[]) => {
  return tickets?.reduce((total, ticket) => total + ticket.price, 0);
};
