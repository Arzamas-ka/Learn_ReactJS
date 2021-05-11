import * as React from 'react';
import Input from './';

export default {
  title: 'Input',
  component: Input
}

export const Search = () => <Input
  search
  label={null}
  name="search"
  type="text"
  placeholder="What do you want to watch?"
  onChange={null}
  value={''}
/>

export const PopupFolders = () => <Input
  label="Movie id"
  name="id"
  type="text"
  onChange={null}
  value={''}
  autoComplete="off"
  placeholder="Movie id"
  disabled
/>