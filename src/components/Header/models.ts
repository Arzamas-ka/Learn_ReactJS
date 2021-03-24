import { movie } from 'components/Catalog/Posters/models';

export interface HeaderProps {
  movieDetails: movie;
  hide: () => void;
}
