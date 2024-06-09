import { create } from 'zustand';

import type { User } from '../types/user';

interface UserState {
  user?: User;
  isLoggedIn: boolean;
}

interface UserActions {
  initUser: (user: User) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState & UserActions>((set) => ({
  // State
  user: undefined,
  isLoggedIn: false,

  // Actions
  initUser: (user) => {
    set({ user });
    set({ isLoggedIn: true });
  },

  clearUser: () => {
    set({ user: undefined });
    set({ isLoggedIn: false });
  }
}));
