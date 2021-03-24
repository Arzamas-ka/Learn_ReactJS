import React, { FC, useState, FormEvent } from 'react';

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
  number: '',
  title: '',
  url: '',
  genre: '',
  overview: '',
  runtime: '',
};

const EditMoviePopup: FC<EditMoviePopupProps> = ({
  hideEdit,
  setIsActiveBackdrop,
}) => {
  const [values, setValues] = useState(initialValues);

  const handleOnChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;

    setValues({
      ...values,
      [target.name]: value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(JSON.stringify(values, null, 2));
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
            name="number"
            type="text"
            placeholder="m032820th"
            onChange={handleOnChange}
            value={values.number}
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
          <Calendar />
          <Input
            label="Movie url"
            name="url"
            type="text"
            placeholder="www.moana.com"
            onChange={handleOnChange}
            value={values.url}
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
        </StyledEditMoviePopupContainer>

        <StyledButtonContainer>
          <Button reset type="reset" onClick={null} text="Reset"></Button>
          <Button submit type="button" onClick={null} text="Save" />
        </StyledButtonContainer>
      </form>
    </StyledEditMoviePopupWrapper>
  );
};

export default EditMoviePopup;
