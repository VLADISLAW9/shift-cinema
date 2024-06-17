import { screen } from '@testing-library/react';
import { useCinemaTodayQuery } from '../../api/useCinemaTodayQuery'; 
import { FilmsList } from './FilmsList';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'
import { Film } from '../../model/types/film'

jest.mock('../../api/useCinemaTodayQuery');

const films: Film[] = [
	{
		id: '1',
		name: 'Film 1',
		originalName: 'Original Name',
		description: 'Description',
		releaseDate: '20.20.2020',
		actors: ['Actor'],
		directors: ['Director'],
		runtime: 120,
		ageRating: 12,
		genres: ['Genre'],
		userRatings: {
			description: 'description',
			kinopoisk: '10',
			imdb: '10'
		},
		img: '/static/images/cinema/film_1.webp',
		country: {
			name: 'Country Name',
			code: 'CN',
			code2: 'CY',
			id: 1
		}
	}, 
	{
		id: '2',
		name: 'Film 2',
		originalName: 'Original Name',
		description: 'Description',
		releaseDate: '20.20.2020',
		actors: ['Actor'],
		directors: ['Director'],
		runtime: 120,
		ageRating: 12,
		genres: ['Genre'],
		userRatings: {
			description: 'description',
			kinopoisk: '10',
			imdb: '10'
		},
		img: '/static/images/cinema/film_1.webp',
		country: {
			name: 'Country Name',
			code: 'CN',
			code2: 'CY',
			id: 1
		}
	}
]

describe('FilmsList', () => {
  test('renders loading state', () => {
    
    (useCinemaTodayQuery as jest.Mock).mockReturnValue({
      isLoading: true,
      data: null,
    });

    componentRender(<FilmsList />);

    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });

  test('renders film list', () => {
    
    (useCinemaTodayQuery as jest.Mock).mockReturnValue({
      isLoading: false,
      data: {
        films: films,
      },
    });

    componentRender(<FilmsList />);

    expect(screen.getByText('Film 1')).toBeInTheDocument();
    expect(screen.getByText('Film 2')).toBeInTheDocument();
  });
});
