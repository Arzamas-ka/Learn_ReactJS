import React, { FC, useState, FormEvent } from 'react';

import {
  AddMovie as AddMovieWrapper,
  ButtonContainer,
  CloseIcon,
} from './style';

import Input from 'components/Input';
import Button from 'components/Button';
import Calendar from 'components/Calendar';

const initialValues = {
  title: '',
  movie: '',
  genre: '',
  overview: '',
  runtime: '',
};

const AddMovie: FC = () => {
  const [values, setValues] = useState(initialValues);

  const handleOnChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (value) => {
    event.preventDefault();

    console.log(JSON.stringify(values, null, 2));
  };

  return (
    <AddMovieWrapper>
      <CloseIcon />
      <h2>Add Movie</h2>
      <form onSubmit={handleSubmit}>
        <>
          <Input
            label="Title"
            view="title"
            name="title"
            type="text"
            placeholder="Moana"
            onChange={handleOnChange}
            value={values.title}
          />
          <Calendar />
          <Input
            label="Movie url"
            view="movie"
            name="movie"
            type="text"
            placeholder="Movie url here"
            onChange={handleOnChange}
            value={values.movie}
          />
          <Input
            label="Genre"
            view="genre"
            name="genre"
            type="text"
            placeholder="Select Genre"
            onChange={handleOnChange}
            value={values.genre}
          />
          <Input
            label="Overview"
            view="overview"
            name="overview"
            type="text"
            placeholder="Overview here"
            onChange={handleOnChange}
            value={values.overview}
          />
          <Input
            label="Runtime"
            view="runtime"
            name="runtime"
            type="text"
            placeholder="Runtime here"
            onChange={handleOnChange}
            value={values.runtime}
          />
        </>

        <ButtonContainer>
          <Button type="reset" view="reset" onClick={null} text="Reset" />
          <Button type="submit" view="submit" onClick={null} text="Submit" />
        </ButtonContainer>
      </form>
    </AddMovieWrapper>
  );
};

export default AddMovie;
