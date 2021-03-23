import React, { FC, useState, FormEvent, useCallback } from 'react';

import { AppMoviePopup } from './models';
import {
  StyledAddMoviePopupWrapper,
  StyledButtonContainer,
  StyledCloseIcon,
  StyledAddMoviePopupContainer,
  StyledAddMoviePopupTitle,
} from './style';

import Input from 'components/Input';
import Button from 'components/Button';
import Calendar from 'components/Calendar';
import Select from 'components/Select';

const initialValues = {
  title: '',
  movie: '',
  genre: '',
  overview: '',
  runtime: '',
};

const AddMoviePopup: FC<AppMoviePopup> = ({ hide }) => {
  const [values, setValues] = useState(initialValues);

  const handleOnChange = useCallback(({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;

    setValues({
      ...values,
      [target.name]: value,
    });
  }, []);

  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(JSON.stringify(values, null, 2));
  }, []);

  return (
    <StyledAddMoviePopupWrapper>
      <StyledCloseIcon onClick={hide} />
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
          <Calendar />
          <Input
            label="Movie url"
            name="movie"
            type="text"
            placeholder="Movie url here"
            onChange={handleOnChange}
            value={values.movie}
            autoComplete="off"
          />
          <Select onChange={handleOnChange} value={values.genre} name="genre" />
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
          <Button reset type="reset" onClick={null} text="Reset"/>
          <Button submit type="submit" onClick={null} text="Submit" />
        </StyledButtonContainer>
      </form>
    </StyledAddMoviePopupWrapper>
  );
};

export default AddMoviePopup;
