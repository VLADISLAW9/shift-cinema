import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useUserStore } from '@/entities/User/model/store/useUserStore';

import {
  type UpdateProfileFormSchema,
  updateProfileFormSchema
} from '../schemas/UpdateProfileFormSchema';

export const useUpdateProfileForm = () => {
  const { user } = useUserStore();

  return useForm<UpdateProfileFormSchema>({
    resolver: zodResolver(updateProfileFormSchema),
    defaultValues: {
      middlename: user?.middlename || '',
      firstname: user?.firstname || '',
      lastname: user?.lastname || '',
      email: user?.email || '',
      phone: user?.phone || ''
    }
  });
};
