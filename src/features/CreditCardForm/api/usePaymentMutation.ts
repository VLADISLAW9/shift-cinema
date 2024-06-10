import { useMutation } from '@tanstack/react-query';

import type { PurchasedTickets, Seance } from '@/entities/Film';
import type { User } from '@/entities/User';
import { $api } from '@/shared/api/api';
import type { Response } from '@/shared/types/response';

import type { DebitCard } from '../model/types/DebitCard';

interface PaymentResponse extends Response {
  order: any;
  phone: string;
  status: string;
}

interface PaymentRequestBody {
  filmId: string;
  person: Omit<Partial<User>, 'id' | 'email' | 'city'>;
  debitCard: DebitCard;
  seance: Partial<Seance>;
  tickets: PurchasedTickets[];
}

export const usePaymentMutation = () =>
  useMutation({
    mutationFn: ({ debitCard, filmId, person, seance, tickets }: PaymentRequestBody) => {
      return $api.post<PaymentResponse>('/cinema/payment', {
        debitCard,
        filmId,
        person,
        seance,
        tickets
      });
    }
  });
