import React, {Fragment, useMemo, useState} from 'react';
import {DOCUMENT_TABLE_COLUMNS, DOCUMENT_TABLE_COLUMN_TITLES} from 'constants/document';
import {STATUSES, STATUS_TITLES} from 'constants/common';
import getSymbolFromCurrency from 'currency-symbol-map';
import {DataGridProps, GridColDef, GridValueGetterParams} from '@mui/x-data-grid';
import {Button, Chip} from '@mui/material';
import {SORTING_DIRECTIONS} from 'components/Table/services/constants';
import {UIDialog, UITable} from 'components';
import {Action} from '@redux-saga/types';
import type {CancelDocumentsRequestedPayload, IDocumentWithTotal} from '../services/types';
import {getCancelledTitles, getSumInRUB, getTotalInfo} from '../services/utils';
import {StyledChip, TableActionsBox, TableInfoBox} from './styles';

const {
  status,
  sum,
  qty,
  volume,
  name,
  delivery_date: deliveryDate,
  currency,
  total,
} = DOCUMENT_TABLE_COLUMNS;

const columns: GridColDef<IDocumentWithTotal>[] = [
  {field: name, headerName: DOCUMENT_TABLE_COLUMN_TITLES[name], flex: 1},
  {field: deliveryDate, headerName: DOCUMENT_TABLE_COLUMN_TITLES[deliveryDate]},
  {
    field: status,
    headerName: DOCUMENT_TABLE_COLUMN_TITLES[status],
    width: 110,
    renderCell: (params) => {
      return (
        <Chip
          label={STATUS_TITLES[params.value as STATUSES]}
          color={params.value === STATUSES.ACTIVE ? 'primary' : 'warning'}
        />
      );
    },
  },
  {field: volume, headerName: DOCUMENT_TABLE_COLUMN_TITLES[volume]},
  {field: qty, headerName: DOCUMENT_TABLE_COLUMN_TITLES[qty]},
  {field: sum, headerName: DOCUMENT_TABLE_COLUMN_TITLES[sum]},
  {field: currency, headerName: DOCUMENT_TABLE_COLUMN_TITLES[currency]},
  {
    field: total,
    headerName: DOCUMENT_TABLE_COLUMN_TITLES[total],
    valueGetter: (params: GridValueGetterParams) => ({
      currency: params.row.currency,
      total: params.row.total,
    }),
    renderCell: ({formattedValue: {currency, total}}) => (
      <Fragment>{`${getSymbolFromCurrency(currency)}${total}`}</Fragment>
    ),
    sortComparator: (value1, value2) => {
      const {currency: currency1, total: total1} = value1;
      const {currency: currency2, total: total2} = value2;

      return getSumInRUB(total1, currency1) - getSumInRUB(total2, currency2);
    },
  },
];

type HomePageTableProps = Omit<DataGridProps, 'columns'> & {
  onCancel: (payload: CancelDocumentsRequestedPayload) => Action;
  disabled: boolean;
  requestData: () => Action;
};

const HomePageTable = (props: HomePageTableProps): JSX.Element => {
  const {onCancel, rows, requestData, ...rest} = props;

  const [idsToCancel, setIdsToCancel] = useState<CancelDocumentsRequestedPayload>([]);
  const [isRequestDisabled, toggleRequestDisabled] = useState<boolean>(true);

  const {totalVolume, totalQty} = useMemo(
      () => getTotalInfo(rows as IDocumentWithTotal[]),
      [rows],
  );

  const cancelledTitles = useMemo(
      () => getCancelledTitles(rows as IDocumentWithTotal[], idsToCancel),
      [idsToCancel, rows],
  );

  return (
    <Fragment>
      <UITable
        initialState={{
          sorting: {
            sortModel: [{field: deliveryDate, sort: SORTING_DIRECTIONS.DESC}],
          },
        }}
        rows={rows}
        columns={columns}
        onSelectionModelChange={(ids) => {
          setIdsToCancel(ids as CancelDocumentsRequestedPayload);
        }}
        {...rest}
      />

      <TableInfoBox>
        <StyledChip label={`Общий объём: ${totalVolume}`} />
        <StyledChip label={`Общее количество: ${totalQty}`} />
      </TableInfoBox>

      <TableActionsBox>
        <UIDialog
          actionTitle="Аннулировать"
          onConfirm={() => {
            onCancel(idsToCancel);

            toggleRequestDisabled(false);
          }}
          disabled={idsToCancel.length === 0}
        >
          {`Вы уверены что хотите аннулировать товар(ы): ${cancelledTitles.join(', ')}?`}
        </UIDialog>

        <Button
          disabled={isRequestDisabled}
          onClick={() => {
            requestData();
            toggleRequestDisabled(true);
          }}
        >
          Вернуть удалённые данные
        </Button>
      </TableActionsBox>
    </Fragment>
  );
};

export default HomePageTable;
