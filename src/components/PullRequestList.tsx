import React from 'react';
import { Table, TableHeader, TableBody } from '@patternfly/react-table';
import { getPullsAPIPath, getRowsFromPullData } from '../services/api-utils';

const PullRequestList = (): React.ReactElement => {
  const columns = ['Title', 'Author', 'Status', 'Assignee', 'Link'];
  const [rows, setRows] = React.useState<string[][]>([]);

  React.useEffect(() => {
    getPullsAPIPath('openshift', 'console').then((res) =>
      res.json().then((data) => setRows(getRowsFromPullData(data))),
    );
  }, []);

  return rows.length > 0 ? (
    <Table aria-label="Repo Search Results" cells={columns} rows={rows}>
      <TableHeader />
      <TableBody />
    </Table>
  ) : (
    <>Not Loaded</>
  );
};

export default PullRequestList;
