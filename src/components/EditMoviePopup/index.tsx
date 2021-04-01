import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useFormik } from 'formik';

import { EditMoviePopupProps } from './models';
import {
  StyledEditMoviePopupWrapper,
  StyledButtonContainer,
  StyledCloseIcon,
  StyledEditMoviePopupContainer,
  StyledEditMoviePopupTitle,
  StyledEditMoviePopupError,
} from './style';

import { editMovie } from 'api';

import Input from 'components/Input';
import Button from 'components/Button';
import Calendar from 'components/Calendar';
import Select from 'components/Select';

import { initialValue, validationSchema } from './config';

const EditMoviePopup: FC<EditMoviePopupProps> = ({
  hideEdit,
  setIsActiveBackdrop,
}) => {
  const posterId = useSelector(({ movies: { posterId } }) => posterId);
  const movie = useSelector(({ movies: { items } }) =>
    items.find((movie) => movie.id === posterId),
  );
  const dispatch = useDispatch();
  const initialValues = { ...initialValue, ...movie };

  const onSubmit = (values) => {
    dispatch(editMovie(values));
    hideEdit();
    setIsActiveBackdrop(false);
  };

  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    touched,
    resetForm,
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
    <StyledEditMoviePopupWrapper>
      <StyledCloseIcon
        onClick={() => {
          hideEdit(), setIsActiveBackdrop(false);
        }}
      />
      <StyledEditMoviePopupTitle>Edit Movie</StyledEditMoviePopupTitle>
      <form onSubmit={handleSubmit}>
        <StyledEditMoviePopupContainer>
          <Input
            label="Movie id"
            name="id"
            type="text"
            onChange={handleChange}
            value={values.id}
            autoComplete="off"
            disabled
          />
          {
            <StyledEditMoviePopupError>
              {touched.id && errors.id ? errors.id : ''}
            </StyledEditMoviePopupError>
          }
          <Input
            label="Title"
            name="title"
            type="text"
            onChange={handleChange}
            value={values.title}
            autoComplete="off"
          />
          {
            <StyledEditMoviePopupError>
              {touched.title && errors.title ? errors.title : ''}
            </StyledEditMoviePopupError>
          }
          <Calendar
            name="release_date"
            type="text"
            onChange={handleOnCalendar}
            value={values['release_date']}
          />
          <Input
            label="Movie url"
            name="poster_path"
            type="text"
            onChange={handleChange}
            value={values['poster_path']}
            autoComplete="off"
          />
          {
            <StyledEditMoviePopupError>
              {touched['poster_path'] && errors['poster_path']
                ? errors['poster_path']
                : ''}
            </StyledEditMoviePopupError>
          }
          <Select
            name="genres"
            onChange={handleOnSelect}
            value={values.genres}
            selected={values.genres}
          />
          {
            <StyledEditMoviePopupError>
              {touched.genres && errors.genres ? errors.genres : ''}
            </StyledEditMoviePopupError>
          }
          <Input
            label="Overview"
            name="overview"
            type="text"
            onChange={handleChange}
            value={values.overview}
            autoComplete="off"
          />
          {
            <StyledEditMoviePopupError>
              {touched.overview && errors.overview ? errors.overview : ''}
            </StyledEditMoviePopupError>
          }
          <Input
            label="Runtime"
            name="runtime"
            type="text"
            onChange={handleChange}
            value={values.runtime}
            autoComplete="off"
          />
          {
            <StyledEditMoviePopupError>
              {touched.runtime && errors.runtime ? errors.runtime : ''}
            </StyledEditMoviePopupError>
          }
        </StyledEditMoviePopupContainer>

        <StyledButtonContainer>
          <Button
            reset
            type="reset"
            onClick={() => resetForm()}
            text="Reset"
          ></Button>
          <Button submit type="submit" onClick={null} text="Save" />
        </StyledButtonContainer>
      </form>
    </StyledEditMoviePopupWrapper>
  );
};

export default EditMoviePopup;
