import { movie } from 'components/Catalog/Posters/models';

export interface HeaderProps {
  loadingMovieDetails: boolean;
  errorMovieDetails: boolean;
  movieDetails: movie;
  hideAdd: () => void;
  setIsActiveBackdrop: any;
}
export interface SearchHeaderProps {
  loadingMovieDetails: boolean;
  errorMovieDetails: boolean;
  movieDetails: movie;
}
export interface AddHeaderProps {
  hideAdd: () => void;
  setIsActiveBackdrop: any;
}
