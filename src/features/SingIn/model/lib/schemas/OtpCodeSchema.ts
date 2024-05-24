import { z } from 'zod';

export const otpCodeSchema = z.object({
  otpCode: z
    .string()
    .min(1, 'Поле обязательно для заполнения')
    .regex(/^\d{6}$/, 'Код должен содержать 6 цифр')
    .transform(Number)
});

export type OtpCodeSchema = z.infer<typeof otpCodeSchema>;
