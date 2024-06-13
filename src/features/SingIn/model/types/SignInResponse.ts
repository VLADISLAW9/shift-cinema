import type { User } from '@/entities/User';

export interface SignInResponse {
  success: boolean;
  reason: string;
  user: Omit<User, 'id'>;
  token: string;
}
