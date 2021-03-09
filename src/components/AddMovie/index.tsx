import React, { FC, useState } from 'react';

import {
  AddMovie as AddMovieWrapper,
  ButtonContainer,
  CloseIcon,
  AddMovieContainer,
  AddMovieTitle,
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

const selectOptions = [
  { id: 1, name: 'Action & Adventure' },
  { id: 2, name: 'Drama, Biography, Music' },
  { id: 3, name: 'Oscar winning movie' },
];

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

  const handleSubmit = (values) => {
    event.preventDefault();

    console.log(JSON.stringify(values, null, 2));
  };

  const onSelectChange = (event) => {
    console.log(event.target.value);
  }

  return (
    <AddMovieWrapper>
      <CloseIcon />
      <AddMovieTitle>Add Movie</AddMovieTitle>
      <form onSubmit={handleSubmit}>
        <AddMovieContainer>
          <Input
            topic
            label="Title"
            name="title"
            type="text"
            placeholder="Moana"
            onChange={handleOnChange}
            value={values.title}
          />
          <Calendar />
          <Input
            movie
            label="Movie url"
            name="movie"
            type="text"
            placeholder="Movie url here"
            onChange={handleOnChange}
            value={values.movie}
          />
          {/* <Input
            genre
            label="Genre"
            name="genre"
            type="text"
            placeholder="Select Genre"
            onChange={handleOnChange}
            value={values.genre}
          /> */}
          <Select data={selectOptions} onSelectChange={onSelectChange} />
          <Input
            overview
            label="Overview"
            name="overview"
            type="text"
            placeholder="Overview here"
            onChange={handleOnChange}
            value={values.overview}
          />
          <Input
            runtime
            label="Runtime"
            name="runtime"
            type="text"
            placeholder="Runtime here"
            onChange={handleOnChange}
            value={values.runtime}
          />
        </AddMovieContainer>

        <ButtonContainer>
          <Button reset type="reset" onClick={null} text="Reset"></Button>
          <Button submit type="submit" onClick={null} text="Submit" />
        </ButtonContainer>
      </form>
    </AddMovieWrapper>
  );
};

export default AddMovie;
