import { memo, useState } from 'react';
import { Controller } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';
import { useNavigate } from 'react-router-dom';
import { classNames } from '@lib/classNames/classNames';
import { Button } from '@ui/Button/Button';
import { Input } from '@ui/Input';
import { Typography } from '@ui/Typography';

import { useUserStore } from '@/entities/User/model/store/useUserStore';
import { USER_LOCALSTORAGE_KEY } from '@/shared/consts/localstorage';
import { getRouteFilms } from '@/shared/consts/router';
import { convertPhoneToString } from '@/shared/lib/utils/convertPhoneToString';

import { useCreateOtpCodeMutation } from '../../api/useCreateOtpCodeMutation';
import { useSignInMutation } from '../../api/useSignInMutation';
import type { SignInStages } from '../../model/lib/consts/SignInStages';
import { useAuthForm } from '../../model/lib/hooks/useAuthForm';
import type { OtpCodeSchema } from '../../model/lib/schemas/OtpCodeSchema';
import type { PhoneNumberSchema } from '../../model/lib/schemas/PhoneNumberSchema';
import { CountDownButton } from '../CountDownButton/CountDownButton';

import cls from './SignInForm.module.scss';

interface SignInFormProps {
  className?: string;
}

export const SignInForm = memo((props: SignInFormProps) => {
  // TODO: Вынести в useSignInForm
  const { className } = props;
  const navigate = useNavigate();

  const initUser = useUserStore((state) => state.initUser);

  const createOtpCodeMutation = useCreateOtpCodeMutation();
  const signInMutation = useSignInMutation();

  const [submittedPhones, setSubmittedPhones] = useState<{
    [key: string]: number;
  }>({});

  const [authStage, setAuthStage] = useState<SignInStages>('PHONE');
  const authForm = useAuthForm(authStage);

  const isSubmitting = createOtpCodeMutation.isPending || signInMutation.isPending;

  const isPhoneNumberStage = authStage === 'PHONE';
  const isOtpStage = authStage === 'OTP';

  const currentPhone = authForm.watch('phone');

  const handleCreateOtpCode = async (data?: PhoneNumberSchema) => {
    const phone = data?.phone || currentPhone;
    const createOtpCodeResponse = await createOtpCodeMutation.mutateAsync({ phone });

    setSubmittedPhones({
      ...submittedPhones,
      [phone]: Date.now() + createOtpCodeResponse.data.retryDelay
    });

    setAuthStage('OTP');
  };

  const handleSignIn = async (data: OtpCodeSchema) => {
    const formData = data;
    const signInResponse = await signInMutation.mutateAsync({
      phone: currentPhone,
      code: formData.otpCode
    });

    if (!signInResponse.data.success && signInResponse.data.reason) {
      return authForm.setError('otpCode', { message: signInResponse.data.reason });
    }

    localStorage.setItem(USER_LOCALSTORAGE_KEY, signInResponse.data.token);
    initUser(signInResponse.data.user);

    navigate(getRouteFilms());
  };

  const onSubmit = (data: PhoneNumberSchema | OtpCodeSchema) => {
    if (isPhoneNumberStage) {
      handleCreateOtpCode(data as PhoneNumberSchema);
    }

    if (isOtpStage) {
      handleSignIn(data as OtpCodeSchema);
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
            onChange={(event) => onChange(convertPhoneToString(event.target.value))}
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
        disabled={isSubmitting}
        type='submit'
        className={cls.continue_button}
        variant='primary_filled'
      >
        <Typography variant='typography16_semibold'>
          {isSubmitting ? 'Загрузка...' : 'Продолжить'}
        </Typography>
      </Button>
      {isOtpStage && (
        <CountDownButton
          endTime={submittedPhones[currentPhone]}
          loading={isSubmitting}
          onRetrySendOtpCode={handleCreateOtpCode}
        />
      )}
    </form>
  );
});
