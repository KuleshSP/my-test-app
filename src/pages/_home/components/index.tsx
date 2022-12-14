import React, {useEffect} from 'react';
import {connect, ConnectedProps} from 'react-redux';

import type {RootState} from '_main/services/types';

import {actions as homePageActions} from '../services/actions';
import {getTableAsyncState} from '../services/selectors';

const connector = connect((state: RootState) => {
  const {loaded, pending} = getTableAsyncState(state);

  return {
    loaded,
    pending,
  };
}, homePageActions);

type ReduxProps = ConnectedProps<typeof connector>;

const HomeTemplate = (props: ReduxProps): JSX.Element => {
  const {mountPage, unmountPage} = props;

  useEffect(() => {
    mountPage();

    return () => {
      unmountPage();
    };
  }, []);

  return <div></div>;
};

export default connector(HomeTemplate);
