import { z } from 'zod';

import { validatePhoneNumber } from '@/shared/lib/utils/validatePhoneNumber';

export const phoneNumberSchema = z.object({
  phone: z
    .string({ required_error: 'Поле обязательно для заполнения' })
    .min(11, { message: 'Номер должен иметь минимум 11 цифр' })
    .refine((value) => validatePhoneNumber(value), { message: 'Неверный формат номера' })
});

export type PhoneNumberSchema = z.infer<typeof phoneNumberSchema>;
