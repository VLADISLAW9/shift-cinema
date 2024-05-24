import { parsePhoneNumber } from 'libphonenumber-js';
import { z } from 'zod';

export const phoneNumberSchema = z.object({
  phone: z
    .string()
    .min(1, { message: 'Поле обязательно для заполнения' })
    .refine(
      (value) => {
        try {
          const phoneNumber = parsePhoneNumber(value, 'RU');
          return phoneNumber.isValid();
        } catch {
          return false;
        }
      },
      { message: 'Неверный формат номера' }
    )
});

export type PhoneNumberSchema = z.infer<typeof phoneNumberSchema>;
