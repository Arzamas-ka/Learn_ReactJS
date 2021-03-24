import { PostersProps } from './Posters/models';

export interface CatalogProps extends PostersProps {
  setLoadingMovieDetails: boolean;
  setErrorMovieDetails: boolean;
}
