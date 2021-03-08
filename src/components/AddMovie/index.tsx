import React, { FC, useState, FormEvent } from 'react';

import {
  AddMovie as AddMovieWrapper,
  ButtonContainer,
  AddMovieContainer,
  AddMovieTitle,
} from './style';

import Input from 'components/Input';
import Button from 'components/Button';
import Close from 'components/Close';

const AddMovie: FC = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (event: FormEvent<HTMLInputElement>): void => {
    console.log('input: ', event.currentTarget.value);

    setValue(event.currentTarget.value);
  };

  return (
    <AddMovieWrapper>
      <Close />
      <AddMovieTitle>Add Movie</AddMovieTitle>
      <AddMovieContainer>
        <Input
          topic
          label="Title"
          name="title"
          type="text"
          placeholder="Moana"
          onChange={handleOnChange}
          value={value}
        />
        <Input
          release
          label="Release date"
          name="release"
          type="text"
          placeholder="Select Date"
          onChange={handleOnChange}
          value={value}
        />
        <Input
          movie
          label="Movie url"
          name="movie"
          type="text"
          placeholder="Movie url here"
          onChange={handleOnChange}
          value={value}
        />
        <Input
          genre
          label="Genre"
          name="genre"
          type="text"
          placeholder="Select Genre"
          onChange={handleOnChange}
          value={value}
        />
        <Input
          overview
          label="Overview"
          name="overview"
          type="text"
          placeholder="Overview here"
          onChange={handleOnChange}
          value={value}
        />
        <Input
          runtime
          label="Runtime"
          name="runtime"
          type="text"
          placeholder="Runtime here"
          onChange={handleOnChange}
          value={value}
        />
      </AddMovieContainer>

      <ButtonContainer>
        <Button reset type="reset" onClick={null} text="Reset"></Button>
        <Button submit type="submit" onClick={null} text="Submit" />
      </ButtonContainer>
    </AddMovieWrapper>
  );
};

export default AddMovie;
