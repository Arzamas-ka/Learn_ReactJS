import { movie } from 'components/Catalog/Posters/models';

export interface HeaderProps {
  loadingMovieDetails: boolean;
  errorMovieDetails: boolean;
  movieDetails: movie;
  hideAdd: () => void;
  setIsActiveBackdrop: any;
}
