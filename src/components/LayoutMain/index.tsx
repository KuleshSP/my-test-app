import React from 'react';
import styled from '@emotion/styled';

const StyledLayoutMain = styled.main`
  display: flex;
  align-self: center;
  flex-direction: column;
  flex: 1;
  width: 80%;
  max-width: ${({theme}) => theme.breakpoints.values.xl}px;
  min-width: ${({theme}) => theme.breakpoints.values.sm}px;
`;

interface LayoutMainProps extends React.PropsWithChildren {
  className?: string;
}

const LayoutMain: React.FC<LayoutMainProps> = ({children, className}) => (
  <StyledLayoutMain className={className}>{children}</StyledLayoutMain>
);

export default LayoutMain;
