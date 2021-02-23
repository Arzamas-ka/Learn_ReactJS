import React, { SyntheticEvent, FC, FormEvent, useState } from 'react';

import { Search as SearchStyled } from './style';

import Input from 'components/Input';

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
        <Input
          label={null}
          view="search"
          type="text"
          placeholder="What do you want to watch?"
          onChange={handleOnChange}
          value={value}
        />
      </form>
    </SearchStyled>
  );
};

export default Search;
