import { memo } from 'react';
import { Controller } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';
import { useNavigate, useParams } from 'react-router-dom';

import { getRoutePayment } from '@/shared/consts/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { convertPhoneToString } from '@/shared/lib/utils/convertPhoneToString';
import { Button } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input';
import { Typography } from '@/shared/ui/Typography';

import { useFilmUserDataForm } from '../../model/lib/hooks/useFilmUserDataForm';
import type { FilmUserDataFormSchema } from '../../model/lib/schemas/FilmUserDataFormSchema';

import cls from './FilmUserDataForm.module.scss';

interface FilmUserDataFormProps {
  className?: string;
  setPersonMiddleName: (value: string) => void;
  setPersonFirstName: (value: string) => void;
  setPersonLastName: (value: string) => void;
  setPersonPhone: (value: string) => void;
  setFilmId: (value: string) => void;
}

export const FilmUserDataForm = memo((props: FilmUserDataFormProps) => {
  const {
    className,
    setPersonMiddleName,
    setPersonFirstName,
    setPersonLastName,
    setPersonPhone,
    setFilmId
  } = props;

  const { id: filmId } = useParams();
  const navigate = useNavigate();

  const filmUserDataForm = useFilmUserDataForm();

  const onContinue = (data: FilmUserDataFormSchema) => {
    if (filmId) {
      setPersonMiddleName(data.middlename);
      setPersonFirstName(data.firstname);
      setPersonLastName(data.lastname);
      setPersonPhone(convertPhoneToString(data.phone));
      setFilmId(filmId);
    }

    navigate(getRoutePayment());
    filmUserDataForm.reset();
  };

  return (
    <form
      onSubmit={filmUserDataForm.handleSubmit(onContinue)}
      className={classNames(cls.film_user_data_form, {}, [className])}
    >
      <Typography tag='h2' variant='typography24_bold'>
        Введите ваши данные
      </Typography>
      <Controller
        name='firstname'
        control={filmUserDataForm.control}
        render={({ field, fieldState }) => (
          <Input
            {...field}
            label='Имя'
            required
            {...(fieldState.error && { error: fieldState.error.message })}
          />
        )}
      />
      <Controller
        name='lastname'
        control={filmUserDataForm.control}
        render={({ field, fieldState }) => (
          <Input
            {...field}
            label='Фамилия'
            required
            {...(fieldState.error && { error: fieldState.error.message })}
          />
        )}
      />
      <Controller
        name='middlename'
        control={filmUserDataForm.control}
        render={({ field }) => <Input label='Отчество' {...field} />}
      />
      <Controller
        name='phone'
        control={filmUserDataForm.control}
        render={({ field: { onChange, value, ...otherFieldProps }, fieldState }) => (
          <Input
            {...otherFieldProps}
            component={PatternFormat}
            required
            defaultValue={value}
            format='+7 ### ### ## ##'
            onChange={(event) => onChange(convertPhoneToString(event.target.value))}
            className={cls.phone_number_input}
            label='Телефон'
            {...(fieldState.error && { error: fieldState.error.message })}
          />
        )}
      />
      <Button type='submit' className={cls.continue_button} variant='primary_filled'>
        <Typography variant='typography16_semibold'>Продолжить</Typography>
      </Button>
    </form>
  );
});
