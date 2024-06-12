import { useMutation } from '@tanstack/react-query';

import type { User } from '@/entities/User';
import { $api } from '@/shared/api/api';
import type { Response } from '@/shared/types/response';

interface UpdateProfileResponse extends Response {
  user: Omit<User, 'id'>;
}

interface UpdateProfileDto {
  profile: Omit<User, 'id' | 'phone'>;
  phone: string;
}

export const useUpdateProfileMutation = () =>
  useMutation({
    mutationKey: ['updateProfile'],
    mutationFn: ({ phone, profile }: UpdateProfileDto) => {
      return $api.patch<UpdateProfileResponse>('/users/profile', {
        phone,
        profile
      });
    }
  });
