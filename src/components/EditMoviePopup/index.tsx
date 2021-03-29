import React, { FC, useState, FormEvent, useCallback } from 'react';
import moment from 'moment';

import { EditMoviePopupProps } from './models';
import {
  StyledEditMoviePopupWrapper,
  StyledButtonContainer,
  StyledCloseIcon,
  StyledEditMoviePopupContainer,
  StyledEditMoviePopupTitle,
} from './style';

import Input from 'components/Input';
import Button from 'components/Button';
import Calendar from 'components/Calendar';
import Select from 'components/Select';

const initialValues = {
  id: '',
  title: '',
  release_date: '',
  poster_path: '',
  genres: [],
  overview: '',
  runtime: '',
};

const EditMoviePopup: FC<EditMoviePopupProps> = ({
  hideEdit,
  setIsActiveBackdrop,
}) => {
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

      console.log(JSON.stringify(values, null, 2));
    },
    [values],
  );

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
            placeholder="313369"
            onChange={handleOnChange}
            value={values.id}
            autoComplete="off"
          />
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
            placeholder="www.moana.com"
            onChange={handleOnChange}
            value={values['poster_path']}
            autoComplete="off"
          />
          <Select
            name="genres"
            onChange={handleOnSelect}
            value={values.genres}
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
        </StyledEditMoviePopupContainer>

        <StyledButtonContainer>
          <Button reset type="reset" onClick={null} text="Reset"></Button>
          <Button submit type="submit" onClick={null} text="Save" />
        </StyledButtonContainer>
      </form>
    </StyledEditMoviePopupWrapper>
  );
};

export default EditMoviePopup;
