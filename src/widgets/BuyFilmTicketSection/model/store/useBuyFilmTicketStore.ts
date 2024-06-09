import { create } from 'zustand';

interface BuyFilmTicketState {
  seanceDate?: string;
  seanceTime?: string;
  ticketRow?: number;
  ticketColumn?: number;
}

interface BuyFilmTicketActions {
  setSeanceDate: (seanceDate: string) => void;
  setSeanceTime: (seanceTime: string) => void;
  setTicketRow: (ticketRow: number) => void;
  setTicketColumn: (ticketColumn: number) => void;
}

export const useBuyFilmTicketStore = create<BuyFilmTicketState & BuyFilmTicketActions>((set) => ({
  // State
  seanceDate: undefined,
  seanceTime: undefined,
  ticketRow: undefined,
  ticketColumn: undefined,

  // Actions
  setSeanceDate: (seanceDate) => set({ seanceDate }),
  setSeanceTime: (seanceTime) => set({ seanceTime }),
  setTicketRow: (ticketRow) => set({ ticketRow }),
  setTicketColumn: (ticketColumn) => set({ ticketColumn })
}));
