import React, { SyntheticEvent, FC, FormEvent, useState } from 'react';

import { Search as SearchStyled, InputWrapper } from './style';

import Input from 'components/Input';
import Button from 'components/Button';

const Search: FC = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (event: FormEvent<HTMLInputElement>): void => {
    console.log('input: ', event.currentTarget.value);

    setValue(event.currentTarget.value);
  };

  return (
    <SearchStyled>
      <h2>Find your movie</h2>
      <form onSubmit={(event: SyntheticEvent) => event.preventDefault()}>
        <InputWrapper>
          <Input
            search
            label={null}
            name="search"
            type="text"
            placeholder="What do you want to watch?"
            onChange={handleOnChange}
            value={value}
          />
          <Button submit type="submit" onClick={null} text="Search" />
        </InputWrapper>
      </form>
    </SearchStyled>
  );
};

export default Search;
