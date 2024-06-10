import { memo, useState } from 'react';
import { Controller } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Typography } from '@/shared/ui/Typography';
import { useBuyFilmTicketStore } from '@/widgets/BuyFilmTicketSection/model/store/useBuyFilmTicketStore';

import { usePaymentMutation } from '../api/usePaymentMutation';
import { useCreditCardForm } from '../model/lib/hooks/useCreditCardForm';
import type { CreditCardFormSchema } from '../model/lib/schemas/CreditCardFormSchema';

import cls from './CreditCardForm.module.scss';

interface CreditCardFormProps {
  className?: string;
}

export const CreditCardForm = memo((props: CreditCardFormProps) => {
  const { className } = props;

  const { filmId, person, tickets, seance } = useBuyFilmTicketStore();

  const paymentMutation = usePaymentMutation();
  const [paymentError, setPaymentError] = useState('');

  const creditCardForm = useCreditCardForm();

  const onPay = async (debitCard: CreditCardFormSchema) => {
    if (filmId && person && seance && tickets) {
      const paymentResponse = await paymentMutation.mutateAsync({
        debitCard,
        filmId,
        person,
        seance,
        tickets
      });

      if (!paymentResponse.data.success && paymentResponse.data.reason) {
        return setPaymentError(paymentResponse.data.reason);
      }
    } else {
      return setPaymentError('Не удалось оплатить');
    }
  };

  return (
    <VStack max gap='24' className={classNames(cls.credit_card_form, {}, [className])}>
      <form onSubmit={creditCardForm.handleSubmit(onPay)}>
        <VStack gap='32'>
          <VStack className={cls.credit_card_wrapper} max gap='16'>
            <Controller
              name='pan'
              control={creditCardForm.control}
              render={({ field, fieldState }) => (
                <Input
                  {...field}
                  component={PatternFormat}
                  format='#### ####'
                  label='Номер'
                  placeholder='0000 0000'
                  required
                  {...(fieldState.error && { error: fieldState.error.message })}
                />
              )}
            />
            <HStack max gap='16'>
              <Controller
                name='expireDate'
                control={creditCardForm.control}
                render={({ field, fieldState }) => (
                  <Input
                    {...field}
                    component={PatternFormat}
                    format='##/##'
                    label='Срок'
                    placeholder='00/00'
                    required
                    {...(fieldState.error && { error: fieldState.error.message })}
                  />
                )}
              />
              <Controller
                name='cvv'
                control={creditCardForm.control}
                render={({ field, fieldState }) => (
                  <Input
                    {...field}
                    component={PatternFormat}
                    format='###'
                    label='CVV'
                    placeholder='000'
                    required
                    {...(fieldState.error && { error: fieldState.error.message })}
                  />
                )}
              />
            </HStack>
          </VStack>
          {paymentError && (
            <Typography className={cls.error_message} variant='typography16_regular'>
              {paymentError}
            </Typography>
          )}
          <Button
            disabled={paymentMutation.isPending}
            type='submit'
            className={cls.payment_button}
            variant='primary_filled'
          >
            <Typography variant='typography16_semibold'>
              {paymentMutation.isPending ? 'Загрузка...' : 'Оплатить'}
            </Typography>
          </Button>
        </VStack>
      </form>
    </VStack>
  );
});
