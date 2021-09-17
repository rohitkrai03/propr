import React from 'react';
import {
  PageHeader,
  Page,
} from '@patternfly/react-core';
import { GithubAltIcon } from '@patternfly/react-icons';
import Search from './components/Search';

const App: React.FC = () => {
  return (
    <Page header={<PageHeader logo={<GithubAltIcon style={{ width: '2em', height: '2em' }} />} />}>
      <Search/>
    </Page>
  );
};

export default App;
