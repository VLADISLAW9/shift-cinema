import { memo, useState } from 'react';
import { Controller } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';
import { classNames } from '@lib/classNames/classNames';
import { Button } from '@ui/Button/Button';
import { Input } from '@ui/Input';
import { Typography } from '@ui/Typography';

import { useCreateOtpCode } from '../../api/useCreateOtpCode';
import { useSignIn } from '../../api/useSignIn';
import type { SignInStages } from '../../model/lib/consts/SignInStages';
import { useAuthForm } from '../../model/lib/hooks/useAuthForm';
import type { OtpCodeSchema } from '../../model/lib/schemas/OtpCodeSchema';
import type { PhoneNumberSchema } from '../../model/lib/schemas/PhoneNumberSchema';

import cls from './SignInForm.module.scss';

interface SignInFormProps {
  className?: string;
}

export const SignInForm = memo((props: SignInFormProps) => {
  const { className } = props;

  const createOtpCode = useCreateOtpCode();
  const signIn = useSignIn();

  const [authStage, setAuthStage] = useState<SignInStages>('PHONE');
  const authForm = useAuthForm(authStage);

  const isPhoneNumberStage = authStage === 'PHONE';
  const isOtpStage = authStage === 'OTP';

  const onSubmit = async (data: PhoneNumberSchema | OtpCodeSchema) => {
    if (isPhoneNumberStage) {
      const formData = data as PhoneNumberSchema;
      await createOtpCode.mutateAsync({ phone: formData.phone });
      setAuthStage('OTP');
    }

    if (isOtpStage) {
      const phone = authForm.watch('phone');
      const formData = data as OtpCodeSchema;
      const signInResponse = await signIn.mutateAsync({ phone, code: formData.otpCode });

      if (!signInResponse.data.success && signInResponse.data.reason) {
        return authForm.setError('otpCode', { message: signInResponse.data.reason });
      }
    }
  };

  return (
    <form
      onSubmit={authForm.handleSubmit(onSubmit)}
      className={classNames(cls.sign_in_form_wrapper, {}, [className])}
    >
      <Typography tag='p' variant='typography16_regular'>
        Введите номер телефона для входа <br /> в личный кабинет
      </Typography>
      <Controller
        name='phone'
        control={authForm.control}
        render={({ field: { onChange, value, ...otherFieldProps }, fieldState }) => (
          <Input
            {...otherFieldProps}
            component={PatternFormat}
            format='+7 ### ### ## ##'
            onChange={(event) => onChange(event.target.value.replace('+', '').replace(/ /g, ''))}
            className={cls.phone_number_input}
            placeholder='Телефон'
            {...(fieldState.error && { error: fieldState.error.message })}
          />
        )}
      />
      {isOtpStage && (
        <Controller
          name='otpCode'
          control={authForm.control}
          render={({ field, fieldState }) => (
            <Input
              {...field}
              component={PatternFormat}
              format='######'
              className={cls.otp_code_input}
              placeholder='Проверочный код'
              {...(fieldState.error && { error: fieldState.error.message })}
            />
          )}
        />
      )}
      <Button
        disabled={createOtpCode.isPending || signIn.isPending}
        type='submit'
        className={cls.continue_button}
        variant='primary_filled'
      >
        <Typography variant='typography16_semibold'>
          {createOtpCode.isPending || signIn.isPending ? 'Загрузка...' : 'Продолжить'}
        </Typography>
      </Button>
    </form>
  );
});
