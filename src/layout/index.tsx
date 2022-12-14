import React from 'react';
import {Header, LayoutMain, LayoutRoot} from 'components';

const IndexLayout = (props: React.PropsWithChildren): JSX.Element => {
  const {children} = props;

  return (
    <LayoutRoot>
      <Header />

      <LayoutMain>{children}</LayoutMain>
    </LayoutRoot>
  );
};

export default IndexLayout;
