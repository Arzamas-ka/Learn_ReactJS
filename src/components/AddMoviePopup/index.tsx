import React, { FC, useState, FormEvent, useCallback } from 'react';
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
  // release_date: '',
  poster_path:
    'https://image.tmdb.org/t/p/w500/coss7RgL0NH6g4fC2s5atvf3dFO.jpg',
  // genres: [],
  overview: '',
  runtime: '',
};

const AddMoviePopup: FC<AppMoviePopup> = ({ hideAdd, setIsActiveBackdrop }) => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    console.log('запрос: ');

    dispatch(addMovie(values));
    hideAdd();
    setIsActiveBackdrop(false);
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Required'),
    poster_path: Yup.string().url('The field "Movie url" is not a valid URL.'),
    overview: Yup.string().required('Required'),
    runtime: Yup.number()
      .required('Required')
      .typeError('The field "Runtime" must be a Number.')
      .positive('The field "Runtime" must be a Positive Number.'),
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
  } = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  // const handleOnSelect = useCallback(
  //   (selected) => {
  //     setValues({
  //       ...values,
  //       genres: selected,
  //     });
  //   },
  //   [values],
  // );

  // const handleOnCalendar = useCallback(
  //   (data) => {
  //     const formattedDate = moment(data).format('YYYY-MM-DD');

  //     setValues({
  //       ...values,
  //       release_date: formattedDate,
  //     });
  //   },
  //   [values],
  // );

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
          {/* <Calendar
            name="release_date"
            onChange={handleOnCalendar}
            value={values['release_date']}
          />*/}
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
          {/* <Select
            onChange={handleOnSelect}
            value={values.genres}
            name="genres"
            selected={values.genres}
          /> */}
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
            // disabled={!isValid || isSubmitting}
          />
        </StyledButtonContainer>
      </form>
    </StyledAddMoviePopupWrapper>
  );
};

export default AddMoviePopup;
