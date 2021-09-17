import React from 'react';
import { SearchInput } from '@patternfly/react-core';

interface SearchBarProps {
  searchField: string;
  setSearchField: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({searchField, setSearchField}:SearchBarProps): React.ReactElement => (
  <SearchInput
    value = {searchField} 
    onChange={setSearchField}
    placeholder="Search a GitHub repository"
    style={{ width: 'var(--pf-global--breakpoint--lg)' }}
  />
);

export default SearchBar;
