import { create } from 'zustand';

import type { User } from '../types/user';

export interface UserState {
  user?: Partial<User>;
  isLoggedIn: boolean;
}

export interface UserActions {
  initUser: (user: User) => void;
  setUserData: (user: Omit<User, 'id'>) => void;
  clearUser: () => void;
}

const initialState: UserState = {
  user: undefined,
  isLoggedIn: false
};

export const useUserStore = create<UserState & UserActions>((set) => ({
  ...initialState,

  initUser: (user) => {
    set({ user });
    set({ isLoggedIn: true });
  },

  setUserData: (newUserData) => {
    set(({ user }) => ({ user: { id: user?.id, ...newUserData } }));
  },

  clearUser: () => {
    set(initialState);
  }
}));
