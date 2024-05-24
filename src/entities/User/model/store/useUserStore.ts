import { create } from 'zustand';

import type { User } from '../types/user';

interface UserState {
  user?: User;
}

interface UserActions {
  initUser: (user: User) => void;
}

export const useUserStore = create<UserState & UserActions>((set) => ({
  user: undefined,

  initUser: (user) => {
    set({ user });
  }
}));
