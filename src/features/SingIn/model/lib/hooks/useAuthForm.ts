import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import type { SignInStages } from '../consts/SignInStages';
import type { OtpCodeSchema } from '../schemas/OtpCodeSchema';
import { otpCodeSchema } from '../schemas/OtpCodeSchema';
import type { PhoneNumberSchema } from '../schemas/PhoneNumberSchema';
import { phoneNumberSchema } from '../schemas/PhoneNumberSchema';

export const useAuthForm = (stage: SignInStages) =>
  useForm<PhoneNumberSchema | OtpCodeSchema>({
    resolver: zodResolver(stage === 'PHONE' ? phoneNumberSchema : otpCodeSchema)
  });
