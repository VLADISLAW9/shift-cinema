/**
 * Converts a film user rating to the nearest even number between 0 and 10.
 *
 * @param {number} rate - The user rating to be converted.
 * @return {number} The converted rating.
 * @throws {Error} If the rating is not between 0 and 10.
 */
export function convertFilmUserRating(rate: string): number {
  const convertedRate = Number(rate);

  if (convertedRate < 0 || convertedRate > 10) {
    throw new Error('Rate must be between 0 and 10');
  }

  return Math.round(convertedRate / 2);
}
