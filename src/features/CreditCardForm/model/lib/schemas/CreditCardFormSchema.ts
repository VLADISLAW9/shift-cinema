import { z } from 'zod';

const panRegex = /^\d{4} \d{4}$/;
const expireDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
const cvvRegex = /^\d{3}$/;

export const creditCardFormSchema = z.object({
  pan: z
    .string({ required_error: 'Поле обязательно для заполнения' })
    .regex(panRegex, { message: 'Неверный формат номера карты' }),
  expireDate: z
    .string({ required_error: 'Поле обязательно для заполнения' })
    .regex(expireDateRegex, { message: 'Неверный формат даты истечения' }),
  cvv: z
    .string({ required_error: 'Поле обязательно для заполнения' })
    .regex(cvvRegex, { message: 'Неверный формат CVV' })
});

export type CreditCardFormSchema = z.infer<typeof creditCardFormSchema>;
