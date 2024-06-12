import { z } from 'zod';

export const updateProfileFormSchema = z.object({
  firstname: z
    .string({ required_error: 'Поле обязательно для заполнения' })
    .min(2, { message: 'Имя должно сдержать минимум 2 букву' }),
  lastname: z
    .string({ required_error: 'Поле обязательно для заполнения' })
    .min(1, { message: 'Фамилия должно сдержать минимум 1 букву' }),
  middlename: z.string(),
  email: z.union([z.literal(''), z.string().email('Неверный формат почты')]),
  phone: z.string().optional()
});

export type UpdateProfileFormSchema = z.infer<typeof updateProfileFormSchema>;
