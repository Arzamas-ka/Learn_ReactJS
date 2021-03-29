import React, { FC, useState, FormEvent, useCallback } from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { AppMoviePopup } from './models';
import {
  StyledAddMoviePopupWrapper,
  StyledButtonContainer,
  StyledCloseIcon,
  StyledAddMoviePopupContainer,
  StyledAddMoviePopupTitle,
} from './style';

import { addMovie } from 'api';

import Input from 'components/Input';
import Button from 'components/Button';
import Calendar from 'components/Calendar';
import Select from 'components/Select';

const initialValues = {
  title: '',
  release_date: '',
  poster_path: '',
  genres: [],
  overview: '',
  runtime: '',
};

const AddMoviePopup: FC<AppMoviePopup> = ({ hideAdd, setIsActiveBackdrop }) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState(initialValues);

  const handleOnChange = useCallback(
    ({ target }) => {
      const value = target.type === 'checkbox' ? target.checked : target.value;

      setValues({
        ...values,
        [target.name]: value,
      });
    },
    [values],
  );

  const handleOnSelect = useCallback(
    (selected) => {
      setValues({
        ...values,
        genres: selected,
      });
    },
    [values],
  );

  const handleOnCalendar = useCallback(
    (data) => {
      const formattedDate = moment(data).format('YYYY-MM-DD');

      console.log('formattedDate: ', formattedDate);

      setValues({
        ...values,
        release_date: formattedDate,
      });
    },
    [values],
  );

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      dispatch(addMovie(values));
      hideAdd();
      setIsActiveBackdrop(false);
    },
    [values],
  );

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
            onChange={handleOnChange}
            value={values.title}
            autoComplete="off"
          />
          <Calendar
            name="release_date"
            onChange={handleOnCalendar}
            value={values['release_date']}
          />
          <Input
            label="Movie url"
            name="poster_path"
            type="text"
            placeholder="Movie url here"
            onChange={handleOnChange}
            value={values['poster_path']}
            autoComplete="off"
          />
          <Select
            onChange={handleOnSelect}
            value={values.genres}
            name="genres"
            selected={values.genres}
          />
          <Input
            label="Overview"
            name="overview"
            type="text"
            placeholder="Overview here"
            onChange={handleOnChange}
            value={values.overview}
            autoComplete="off"
          />
          <Input
            label="Runtime"
            name="runtime"
            type="text"
            placeholder="Runtime here"
            onChange={handleOnChange}
            value={values.runtime}
            autoComplete="off"
          />
        </StyledAddMoviePopupContainer>

        <StyledButtonContainer>
          <Button reset type="reset" onClick={null} text="Reset" />
          <Button submit type="submit" onClick={null} text="Submit" />
        </StyledButtonContainer>
      </form>
    </StyledAddMoviePopupWrapper>
  );
};

export default AddMoviePopup;
