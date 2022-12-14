import React from 'react';
import {ContentBox, HeaderBox} from './styles';

const Header = (props: React.PropsWithChildren): JSX.Element => {
  const {children} = props;

  return (
    <HeaderBox>
      <ContentBox>
        Header
        {children}
      </ContentBox>
    </HeaderBox>
  );
};

export default Header;
