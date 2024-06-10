/**
 * Formats an array of tickets into a string representation of the occupied seats.
 *
 * @param {Array<{ row: number; column: number }>?} tickets - An optional array of tickets with row and column properties.
 * @return {string} A string representation of the occupied seats, formatted as "row number - column numbers".
 */
export const formatPlacesToString = (tickets?: { row: number; column: number }[]) => {
  if (!tickets) return;
  const groupedByRow = tickets.reduce((acc: { [key: number]: number[] }, ticket) => {
    if (!acc[ticket.row]) {
      acc[ticket.row] = [];
    }
    acc[ticket.row].push(ticket.column);
    return acc;
  }, {});

  return Object.entries(groupedByRow)
    .map(([row, columns]) => `${row} ряд - ${columns.join(', ')}`)
    .join(' ');
};
