import React, { FC, useState, FormEvent } from 'react';

import {
  EditMovie as EditMovieWrapper,
  ButtonContainer,
  CloseIcon,
  EditMovieContainer,
  EditMovieTitle,
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

const selectOptions = [
  { id: 1, name: 'Action & Adventure' },
  { id: 2, name: 'Drama, Biography, Music' },
  { id: 3, name: 'Oscar winning movie' },
];

const EditMovie: FC = () => {
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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(JSON.stringify(values, null, 2));
  };

  const onSelectChange = (event) => {
    console.log('event: ', event);
  };

  return (
    <EditMovieWrapper>
      <CloseIcon />
      <EditMovieTitle>Edit Movie</EditMovieTitle>
      <form onSubmit={handleSubmit}>
        <EditMovieContainer>
          <Input
            numberId
            label="Movie id"
            name="number"
            type="text"
            placeholder="m032820th"
            onChange={handleOnChange}
            value={values.number}
          />
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
            url
            label="Movie url"
            name="url"
            type="text"
            placeholder="www.moana.com"
            onChange={handleOnChange}
            value={values.url}
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
        </EditMovieContainer>

        <ButtonContainer>
          <Button reset type="reset" onClick={null} text="Reset"></Button>
          <Button submit type="button" onClick={null} text="Save" />
        </ButtonContainer>
      </form>
    </EditMovieWrapper>
  );
};

export default EditMovie;
