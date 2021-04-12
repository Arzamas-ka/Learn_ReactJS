import { movie, PostersProps } from '../models';

export interface PosterItemProps extends PostersProps {
  poster: movie;
  genre: string[];
  hideEdit: () => void;
  hideDelete: () => void;
  setIsActiveBackdrop: any;
}
