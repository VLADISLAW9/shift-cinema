import { create } from 'zustand';

import type { Hall, PurchasedTickets, Seance } from '@/entities/Film';
import type { User } from '@/entities/User';

export type SeanceFromStore = Partial<Seance> & { timeWithHallName?: string };

interface BuyFilmTicketState {
  filmId?: string;
  seance?: SeanceFromStore;
  hall?: Hall;
  person?: Omit<Partial<User>, 'id' | 'email' | 'city'>;
  tickets?: PurchasedTickets[];
}

interface BuyFilmTicketActions {
  setSeanceDate: (seanceDate: string) => void;
  setSeanceTime: (seanceTime: string) => void;
  setHall: (hall: Hall) => void;
  setTickets: (tickets: PurchasedTickets[]) => void;
  setFilmId: (filmId: string) => void;
  setPersonFirstName: (firstname: string) => void;
  setPersonLastName: (lastname: string) => void;
  setPersonMiddleName: (middlename: string) => void;
  setPersonPhone: (phone: string) => void;
}

export const useBuyFilmTicketStore = create<BuyFilmTicketState & BuyFilmTicketActions>((set) => ({
  // State
  filmId: undefined,
  tickets: undefined,
  seance: undefined,
  debitCard: undefined,
  person: undefined,
  hall: undefined,

  // Actions
  setFilmId: (filmId) => set({ filmId }),
  setSeanceDate: (seanceDate) => set(() => ({ seance: { time: '', date: seanceDate } })),
  setSeanceTime: (seanceTime) =>
    set(({ seance }) => ({
      seance: { ...seance, time: seanceTime.split(' ')[0], timeWithHallName: seanceTime }
    })),
  setHall: (newHall) => set(() => ({ hall: newHall, tickets: undefined })),
  setTickets: (tickets) => set({ tickets }),
  setPersonFirstName: (firstname) => set(({ person }) => ({ person: { ...person, firstname } })),
  setPersonLastName: (lastname) => set(({ person }) => ({ person: { ...person, lastname } })),
  setPersonMiddleName: (middlename) => set(({ person }) => ({ person: { ...person, middlename } })),
  setPersonPhone: (phone) => set(({ person }) => ({ person: { ...person, phone } }))
}));
