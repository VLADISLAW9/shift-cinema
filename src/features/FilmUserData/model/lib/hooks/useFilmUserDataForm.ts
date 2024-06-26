import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useUserStore } from '@/entities/User/model/store/useUserStore';

import type { FilmUserDataFormSchema } from '../schemas/FilmUserDataFormSchema';
import { filmUserDataFormSchema } from '../schemas/FilmUserDataFormSchema';

export const useFilmUserDataForm = () => {
  const { user } = useUserStore();

  return useForm<FilmUserDataFormSchema>({
    resolver: zodResolver(filmUserDataFormSchema),
    defaultValues: {
      middlename: user?.middlename || '',
      firstname: user?.firstname || '',
      lastname: user?.lastname || '',
      phone: user?.phone || ''
    }
  });
};
