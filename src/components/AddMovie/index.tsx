import React, { FC, useState, FormEvent } from 'react';

import { AddMovie as AddMovieWrapper, ButtonContainer } from './style';

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
      <h2>Add Movie</h2>
      <div>
        <Input
          label="Title"
          view="title"
          name="title"
          type="text"
          placeholder="Moana"
          onChange={handleOnChange}
          value={value}
        />
        <Input
          label="Release date"
          view="release"
          name="release"
          type="text"
          placeholder="Select Date"
          onChange={handleOnChange}
          value={value}
        />
        <Input
          label="Movie url"
          view="movie"
          name="movie"
          type="text"
          placeholder="Movie url here"
          onChange={handleOnChange}
          value={value}
        />
        <Input
          label="Genre"
          view="genre"
          name="genre"
          type="text"
          placeholder="Select Genre"
          onChange={handleOnChange}
          value={value}
        />
        <Input
          label="Overview"
          view="overview"
          name="overview"
          type="text"
          placeholder="Overview here"
          onChange={handleOnChange}
          value={value}
        />
        <Input
          label="Runtime"
          view="runtime"
          name="runtime"
          type="text"
          placeholder="Runtime here"
          onChange={handleOnChange}
          value={value}
        />
      </div>

      <ButtonContainer>
        <Button type="reset" view="reset" onClick={null} text="Reset"></Button>
        <Button
          type="submit"
          view="submit"
          onClick={null}
          text="Submit"
        />
      </ButtonContainer>
    </AddMovieWrapper>
  );
};

export default AddMovie;
