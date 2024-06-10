import { z } from 'zod';

import { validatePhoneNumber } from '@/shared/lib/utils/validatePhoneNumber';

export const filmUserDataFormSchema = z.object({
  firstname: z
    .string({ required_error: 'Поле обязательно для заполнения' })
    .min(2, { message: 'Имя должно сдержать минимум 2 букву' }),
  lastname: z
    .string({ required_error: 'Поле обязательно для заполнения' })
    .min(1, { message: 'Фамилия должно сдержать минимум 1 букву' }),
  middlename: z.string(),
  phone: z
    .string({ required_error: 'Поле обязательно для заполнения' })
    .min(11, { message: 'Номер должен иметь минимум 11 цифр' })
    .refine((value) => validatePhoneNumber(value), { message: 'Неверный формат номера' })
});

export type FilmUserDataFormSchema = z.infer<typeof filmUserDataFormSchema>;
