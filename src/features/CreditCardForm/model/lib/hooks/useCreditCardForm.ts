import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { type CreditCardFormSchema, creditCardFormSchema } from '../schemas/CreditCardFormSchema';

export const useCreditCardForm = () =>
  useForm<CreditCardFormSchema>({
    resolver: zodResolver(creditCardFormSchema)
  });
