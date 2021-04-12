import * as Yup from 'yup';

export const initialValue = {
  id: '',
  title: '',
  release_date: '',
  poster_path: '',
  genres: [],
  overview: '',
  runtime: '',
};

export const validationSchema = Yup.object({
  id: Yup.string().required('Required'),
  title: Yup.string().required('Required'),
  poster_path: Yup.string()
    .required('Required')
    .url('The "Movie url" field is not a valid URL.'),
  overview: Yup.string().required('Required'),
  runtime: Yup.number()
    .required('Required')
    .typeError('The "Runtime" field must be a Number.')
    .positive('The "Runtime" field must be a Positive Number.'),
  genres: Yup.array().min(1, 'The "Genres" field must have at least 1 items'),
});
