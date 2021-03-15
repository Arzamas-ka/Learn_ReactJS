import React, { FC, useState, FormEvent } from 'react';

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

  const handleOnChange = ({target, name }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(JSON.stringify(values, null, 2));
  };

  const onSelectChange = (event) => {
    console.log('event: ', event);
  };

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
