import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { AppMoviePopup } from './models';
import {
  StyledAddMoviePopupWrapper,
  StyledButtonContainer,
  StyledCloseIcon,
  StyledAddMoviePopupContainer,
  StyledAddMoviePopupTitle,
  StyledAddMoviePopupError,
} from './style';

import { addMovie } from 'api';

import Input from 'components/Input';
import Button from 'components/Button';
import Calendar from 'components/Calendar';
import Select from 'components/Select';

const initialValues = {
  title: '',
  release_date: '',
  poster_path:
    'https://image.tmdb.org/t/p/w500/coss7RgL0NH6g4fC2s5atvf3dFO.jpg',
  genres: [],
  overview: '',
  runtime: '',
};

const AddMoviePopup: FC<AppMoviePopup> = ({ hideAdd, setIsActiveBackdrop }) => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(addMovie(values));
    hideAdd();
    setIsActiveBackdrop(false);

    console.log('values: ', values);
  };

  const validationSchema = Yup.object({
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

  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    touched,
    resetForm,
    isValid,
    isSubmitting,
    setFieldValue,
  } = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const handleOnSelect = (selected) => {
    setFieldValue('genres', selected);
  };

  const handleOnCalendar = (data) => {
    const formattedDate = moment(data).format('YYYY-MM-DD');

    setFieldValue('release_date', formattedDate);
  };

  return (
    <StyledAddMoviePopupWrapper>
      <StyledCloseIcon
        onClick={() => {
          hideAdd(), setIsActiveBackdrop(false);
        }}
      />
      <StyledAddMoviePopupTitle>Add Movie</StyledAddMoviePopupTitle>
      <form onSubmit={handleSubmit}>
        <StyledAddMoviePopupContainer>
          <Input
            label="Title"
            name="title"
            type="text"
            placeholder="Moana"
            onChange={handleChange}
            value={values.title}
            autoComplete="off"
          />
          {
            <StyledAddMoviePopupError>
              {touched.title && errors.title ? errors.title : ''}
            </StyledAddMoviePopupError>
          }
          <Calendar
            name="release_date"
            type="text"
            value={values['release_date']}
            onChange={handleOnCalendar}
          />
          <Input
            label="Movie url"
            name="poster_path"
            type="text"
            placeholder="Movie url here"
            onChange={handleChange}
            value={values['poster_path']}
            autoComplete="off"
          />
          {
            <StyledAddMoviePopupError>
              {touched['poster_path'] && errors['poster_path']
                ? errors['poster_path']
                : ''}
            </StyledAddMoviePopupError>
          }
          <Select
            name="genres"
            onChange={handleOnSelect}
            value={values.genres}
            selected={values.genres}
          />
          {
            <StyledAddMoviePopupError>
              {touched.genres && errors.genres ? errors.genres : ''}
            </StyledAddMoviePopupError>
          }
          <Input
            label="Overview"
            name="overview"
            type="text"
            placeholder="Overview here"
            onChange={handleChange}
            value={values.overview}
            autoComplete="off"
          />
          {
            <StyledAddMoviePopupError>
              {touched.overview && errors.overview ? errors.overview : ''}
            </StyledAddMoviePopupError>
          }
          <Input
            label="Runtime"
            name="runtime"
            type="text"
            placeholder="Runtime here"
            onChange={handleChange}
            value={values.runtime}
            autoComplete="off"
          />
          {
            <StyledAddMoviePopupError>
              {touched.runtime && errors.runtime ? errors.runtime : ''}
            </StyledAddMoviePopupError>
          }
        </StyledAddMoviePopupContainer>

        <StyledButtonContainer>
          <Button reset type="reset" onClick={() => resetForm()} text="Reset" />
          <Button
            submit
            type="submit"
            onClick={null}
            text="Submit"
            disabled={!isValid || isSubmitting}
          />
        </StyledButtonContainer>
      </form>
    </StyledAddMoviePopupWrapper>
  );
};

export default AddMoviePopup;
