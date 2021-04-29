import { movie } from 'components/Catalog/Posters/models';

export interface MovieDetailsProps {
  loadingMovieDetails: boolean;
  errorMovieDetails: boolean;
  movieDetails: movie;
}
