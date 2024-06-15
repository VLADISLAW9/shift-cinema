import { parsePhoneNumber } from 'libphonenumber-js';

/**
 * Validates a phone number by parsing it using the 'libphonenumber-js' library and checking if it is valid.
 *
 * @param {string} phoneNumber - The phone number to validate.
 * @return {boolean} Returns true if the phone number is valid, false otherwise.
 */
export const validatePhoneNumber = (phoneNumber: string) => {
  try {
    const phoneNumberInstance = parsePhoneNumber(phoneNumber, 'RU');
    return phoneNumberInstance.isValid();
  } catch {
    return false;
  }
};
