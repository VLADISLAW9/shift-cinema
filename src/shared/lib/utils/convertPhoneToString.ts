/**
 * Removes the '+' symbol and spaces from a phone number.
 *
 * @param {string} phone - The phone number to convert.
 * @return {string} The phone number as a string without the '+' symbol and spaces.
 */
export const convertPhoneToString = (phone: string) => {
  return phone.replace('+', '').replace(/ /g, '');
};
