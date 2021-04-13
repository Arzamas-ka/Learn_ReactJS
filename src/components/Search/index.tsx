import React, {
  SyntheticEvent,
  FC,
  FormEvent,
  useState,
  useCallback,
  useRef,
  useEffect,
} from 'react';
import { useSelector } from 'react-redux';

import {
  StyledSearchWrapper,
  StyledSearchTitle,
  StyledInputSearchContainer,
} from './style';

import Input from 'components/Input';
import Button from 'components/Button';

import { useApiRequest } from 'hooks/useApiRequest';
import { API_SEARCH } from '@constants';
import { filterMovies } from 'actions/actions';

const Search: FC = () => {
  const inputRef = useRef(null);
  const [value, setValue] = useState('');
  const currentPage = useSelector(({ movies: { currentPage } }) => currentPage);
  const { fetchData: getSearchMovies } = useApiRequest(
    'get',
    API_SEARCH,
    filterMovies,
  );

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
    getSearchMovies(`${value}&searchBy=title&offset=${currentPage}`);
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
          <Button submit type="submit" onClick={handleOnSearch} text="Search" />
        </StyledInputSearchContainer>
      </form>
    </StyledSearchWrapper>
  );
};

export default Search;
