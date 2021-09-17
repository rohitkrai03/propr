import React, { useEffect, useState } from 'react';
import { Table, TableHeader, TableBody } from '@patternfly/react-table';

interface SearchResultsProps {
  searchField: string;
}

interface repository {
  name: string;
  default_branch: string;
}

const SearchResults = ({searchField}:SearchResultsProps): React.ReactElement => {
  const columns = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit'];
  const demoRows = [
    ['Repository one', 'Branch one', 'PR one', 'Workspace one', 'Commit one'],
    ['Repository two', 'Branch two', 'PR two', 'Workspace two', 'Commit two'],
    ['Repository three', 'Branch three', 'PR three', 'Workspace three', 'Commit three'],
    ['Repository one', 'Branch one', 'PR one', 'Workspace one', 'Commit one'],
    ['Repository two', 'Branch two', 'PR two', 'Workspace two', 'Commit two'],
    ['Repository three', 'Branch three', 'PR three', 'Workspace three', 'Commit three'],
  ];
  const [rows, setRows] = useState(demoRows);

  useEffect(() => {
    fetch(`https://api.github.com/orgs/${searchField}/repos`).then((res) =>
    res.json().then((data) => data.length && setRows(
      data.map((item:repository) => {
        return [item.name, item.default_branch, '', '', '']
      })
    ))
  )
  }, [searchField])

  return (
    <Table aria-label="Repo Search Results" cells={columns} rows={rows}>
      <TableHeader />
      <TableBody />
    </Table>
  );
};

export default SearchResults;
