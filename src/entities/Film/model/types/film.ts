import type { Country } from '@/entities/Country';

interface UserRating {
  description: string;
  kinopoisk: string;
  imdb: string;
}

export interface Film {
  id: string;
  name: string;
  originalName: string;
  description: string;
  releaseDate: string;
  actors: string[];
  directors: string[];
  runtime: number;
  ageRating: number;
  genres: string[];
  userRating: UserRating;
  img: string;
  country?: Country;
}
