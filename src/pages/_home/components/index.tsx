import React, {useEffect} from 'react';
import {connect, type ConnectedProps} from 'react-redux';
import type {RootState} from '_main/services/types';
import {UIPaper} from 'components';
import {actions as homePageActions} from '../services/actions';
import {getHomePageState, getTableAsyncState} from '../services/selectors';
import HomePageTable from './table';

const connector = connect((state: RootState) => {
  const {table} = getHomePageState(state);
  const {pending} = getTableAsyncState(state);

  return {
    table,

    pending,
  };
}, homePageActions);

type ReduxProps = ConnectedProps<typeof connector>;

const HomePage = (props: ReduxProps): JSX.Element => {
  const {
    table: {items},

    pending,

    mountPage,
    unmountPage,
    cancelDocumentsRequested,
    documentsRequested,
  } = props;

  useEffect(() => {
    mountPage();

    return () => {
      unmountPage();
    };
  }, []);

  return (
    <UIPaper>
      <HomePageTable
        disabled={pending}
        onCancel={cancelDocumentsRequested}
        requestData={documentsRequested}
        rows={items}
      />
    </UIPaper>
  );
};

export default connector(HomePage);
