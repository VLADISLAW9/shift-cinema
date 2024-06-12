import { create } from 'zustand';

import type { User } from '../types/user';

interface UserState {
  user?: Partial<User>;
  isLoggedIn: boolean;
}

interface UserActions {
  initUser: (user: User) => void;
  setUserData: (user: Omit<User, 'id'>) => void;
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

  setUserData: (newUserData) => {
    set(({ user }) => ({ user: { id: user?.id, ...newUserData } }));
  },

  clearUser: () => {
    set({ user: undefined });
    set({ isLoggedIn: false });
  }
}));
