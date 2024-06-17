import { memo, useState } from 'react';
import { Controller } from 'react-hook-form';

import { useUserStore } from '@/entities/User/model/store/useUserStore';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input';
import { Typography } from '@/shared/ui/Typography';

import { useUpdateProfileMutation } from '../../api/useUpdateProfileMutation';
import { useUpdateProfileForm } from '../../model/lib/hooks/useUpdateProfileForm';
import type { UpdateProfileFormSchema } from '../../model/lib/schemas/UpdateProfileFormSchema';

import cls from './UpdateProfileForm.module.scss';

interface UpdateProfileFormProps {
  className?: string;
}

export const UpdateProfileForm = memo((props: UpdateProfileFormProps) => {
  const { className } = props;

  const { user, setUserData } = useUserStore();

  const updateProfileMutation = useUpdateProfileMutation();
  const updateProfileForm = useUpdateProfileForm();
  const [updateProfileError, setUpdateProfileError] = useState('');

  const onUpdateProfileData = async (data: UpdateProfileFormSchema) => {
    const updateProfileResponse = await updateProfileMutation.mutateAsync({
      profile: {
        middlename: data.middlename,
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        city: user?.city
      },
      phone: user?.phone || ''
    });

    if (!updateProfileResponse.data.success && updateProfileResponse.data.reason) {
      return setUpdateProfileError(updateProfileResponse.data.reason);
    }

    setUserData({
      firstname: data.firstname,
      lastname: data.lastname,
      middlename: data.middlename,
      email: data.email,
      phone: user?.phone || ''
    });
  };
  return (
    <form
      className={classNames(cls.update_profile_form, {}, [className])}
      onSubmit={updateProfileForm.handleSubmit(onUpdateProfileData)}
    >
      <Controller
        control={updateProfileForm.control}
        name='firstname'
        render={({ field, fieldState }) => (
          <Input
            {...field}
            data-testid="firstname_input"
            label='Имя'
            required
            {...(fieldState.error && { error: fieldState.error.message })}
          />
        )}
      />
      <Controller
        control={updateProfileForm.control}
        name='lastname'
        render={({ field, fieldState }) => (
          <Input
            {...field}
            data-testid="lastname_input"
            label='Фамилия'
            required
            {...(fieldState.error && { error: fieldState.error.message })}
          />
        )}
      />
      <Controller
        control={updateProfileForm.control}
        name='middlename'
        render={({ field, fieldState }) => (
          <Input
            {...field}
            data-testid="middlename_input"
            label='Отчество'
            {...(fieldState.error && { error: fieldState.error.message })}
          />
        )}
      />
      <Controller
        control={updateProfileForm.control}
        name='phone'
        disabled
        render={({ field, fieldState }) => (
          <Input
            {...field}
            data-testid="phone_input"
            label='Номер'
            disabled
            {...(fieldState.error && { error: fieldState.error.message })}
          />
        )}
      />
      <Controller
        control={updateProfileForm.control}
        name='email'
        render={({ field, fieldState }) => (
          <Input
            {...field}
            data-testid="email_input"
            label='Email'
            {...(fieldState.error && { error: fieldState.error.message })}
          />
        )}
      />
      <Button
        data-testid="update_profile_button"
        disabled={updateProfileMutation.isPending}
        type='submit'
        className={cls.update_button}
      >
        <Typography variant='typography16_regular'>
          {updateProfileMutation.isPending ? 'Загрузка...' : 'Обновить данные'}
        </Typography>
      </Button>
      {updateProfileError && (
        <Typography className={cls.error_message} variant='typography16_regular'>
          {updateProfileError}
        </Typography>
      )}
    </form>
  );
});
