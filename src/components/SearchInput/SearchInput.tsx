import React from 'react';
import {Container, Input, SearchIcon} from './SearchInput.styles.ts';
import type {SearchInputProps} from './SearchInput.types.ts';

const SearchInput = (props: SearchInputProps) => {
  return (
    <Container testID={'search-input-container'}>
      <SearchIcon name={'search'} />

      <Input testID={'search-input'} {...props} />
    </Container>
  );
};

export default SearchInput;
