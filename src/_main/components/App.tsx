import React, {Suspense, useEffect} from 'react';
import {connect, type ConnectedProps} from 'react-redux';
import HomePage from 'pages/_home/components';
import IndexLayout from 'layout';
import {actions as appActions} from '../services/actions';

const connector = connect(undefined, appActions);

type ReduxProps = ConnectedProps<typeof connector>;

const App = (props: ReduxProps): JSX.Element => {
  const {mountApp, unmountApp} = props;

  useEffect(() => {
    mountApp();

    return () => {
      unmountApp();
    };
  }, []);

  return (
    <Suspense fallback={null}>
      <IndexLayout>
        <HomePage />
      </IndexLayout>
    </Suspense>
  );
};

export default connector(App);
