import React from 'react';
import { SearchInput } from '@patternfly/react-core';

const SearchBar = (): React.ReactElement => (
  <SearchInput
    placeholder="Search a GitHub repository"
    style={{ width: 'var(--pf-global--breakpoint--lg)' }}
  />
);

export default SearchBar;
