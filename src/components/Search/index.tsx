import {
  Bullseye,
  PageSection,
  PageSectionVariants,
} from '@patternfly/react-core';
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

const Search = () : React.ReactElement =>  {

  const [searchField, setSearchField] = useState<string>('');

  return (
    <>
      <PageSection variant={PageSectionVariants.light} sticky="top" hasShadowBottom>
        <Bullseye>
          <SearchBar searchField={searchField} setSearchField={setSearchField}/>
        </Bullseye>
      </PageSection>
      <PageSection variant={PageSectionVariants.light} isFilled>
        <SearchResults searchField={searchField}/>
      </PageSection>
    </>
  );
}

export default Search;