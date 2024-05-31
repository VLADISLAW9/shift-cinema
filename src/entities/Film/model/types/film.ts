import type { Country } from '@/entities/Country';
import type { FilmUserRating } from '@/entities/FilmUserRating';

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
  userRatings: FilmUserRating;
  img: string;
  country?: Country;
}
