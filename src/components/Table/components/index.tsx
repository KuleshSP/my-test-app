import React from 'react';
import {DataGrid, type DataGridProps} from '@mui/x-data-grid';
import {TableBox} from './styles';

const UITable = (props: DataGridProps): JSX.Element => {
  return (
    <TableBox>
      <DataGrid checkboxSelection {...props} />
    </TableBox>
  );
};

export default UITable;
