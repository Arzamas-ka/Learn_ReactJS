import * as React from 'react';
import {
  SyntheticEvent,
  FC,
  FormEvent,
  useState,
  useCallback,
  useRef,
  useEffect,
} from 'react';
import { Link } from 'react-router-dom';

import {
  StyledSearchWrapper,
  StyledSearchTitle,
  StyledInputSearchContainer,
} from './style';

import Input from 'components/Input';
import Button from 'components/Button';

import { encodeURL } from 'helpers';

const Search: FC = () => {
  const inputRef = useRef(null);
  const [value, setValue] = useState('');
  const encode = encodeURL(value);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleOnChange = useCallback(
    (event: FormEvent<HTMLInputElement>): void => {
      setValue(event.currentTarget.value);
    },
    [value],
  );

  const handleOnSearch = useCallback(() => {
    setValue('');
  }, [value]);

  return (
    <StyledSearchWrapper>
      <StyledSearchTitle>Find your movie</StyledSearchTitle>
      <form onSubmit={(event: SyntheticEvent) => event.preventDefault()}>
        <StyledInputSearchContainer>
          <Input
            search
            label={null}
            name="search"
            type="text"
            placeholder="What do you want to watch?"
            onChange={handleOnChange}
            value={value}
            ref={inputRef}
          />

          <Link to={`/search/${encode}`}>
            <Button
              submit
              type="submit"
              onClick={handleOnSearch}
              text="Search"
            />
          </Link>
        </StyledInputSearchContainer>
      </form>
    </StyledSearchWrapper>
  );
};

export default Search;
