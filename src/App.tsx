import React from 'react';
import {
  PageHeader,
  Page,
  Bullseye,
  PageSection,
  PageSectionVariants,
} from '@patternfly/react-core';
import { GithubAltIcon } from '@patternfly/react-icons';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

const App: React.FC = () => {
  return (
    <Page header={<PageHeader logo={<GithubAltIcon style={{ width: '2em', height: '2em' }} />} />}>
      <PageSection variant={PageSectionVariants.light} sticky="top" hasShadowBottom>
        <Bullseye>
          <SearchBar />
        </Bullseye>
      </PageSection>
      <PageSection variant={PageSectionVariants.light} isFilled>
        <SearchResults />
      </PageSection>
    </Page>
  );
};

export default App;
