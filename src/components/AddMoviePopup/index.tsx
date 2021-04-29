import * as React from 'react';
import { FC, useEffect } from 'react';
import moment from 'moment';
import { useFormik } from 'formik';

import { AppMoviePopup } from './models';
import {
  StyledAddMoviePopupWrapper,
  StyledButtonContainer,
  StyledCloseIcon,
  StyledAddMoviePopupContainer,
  StyledAddMoviePopupTitle,
  StyledAddMoviePopupError,
} from './style';

import Input from 'components/Input';
import Button from 'components/Button';
import Calendar from 'components/Calendar';
import Select from 'components/Select';

import { initialValues, validationSchema } from './config';

import { API_BASE } from '@constants';
import { useApiRequest } from 'hooks/useApiRequest';
import { addMovie } from 'actions/actions';

const AddMoviePopup: FC<AppMoviePopup> = ({
  hideAdd,
  setIsActiveBackdrop,
  hideCongratulations,
}) => {
  const { fetchData: fetchAddMovie } = useApiRequest(
    'post',
    API_BASE,
    addMovie,
  );

  useEffect(() => {
    const close = (event) => {
      if (event.keyCode === 27) {
        event.preventDefault();

        setIsActiveBackdrop(false);
        hideAdd();
      }
    };
    window.addEventListener('keydown', close);

    return () => window.removeEventListener('keydown', close);
  }, [hideAdd]);

  const onSubmit = (values) => {
    const body = { ...values, runtime: parseInt(values.runtime) };
    fetchAddMovie(undefined, body);
    hideAdd();
    hideCongratulations();
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
    <StyledAddMoviePopupWrapper>
      <StyledCloseIcon
        aria-label="button-close"
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
            placeholder="Select date"
            onKeyDown={(event) => event.preventDefault()}
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
            aria-label="select"
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
          <Button submit type="submit" onClick={null} text="Submit" />
        </StyledButtonContainer>
      </form>
    </StyledAddMoviePopupWrapper>
  );
};

export default AddMoviePopup;
