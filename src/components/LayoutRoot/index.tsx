import React from 'react';
import styled from '@emotion/styled';

const StyledLayoutRoot = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
  background-color: white;
`;

interface LayoutRootProps extends React.PropsWithChildren {
  className?: string;
}

const LayoutRoot = ({children, className}: LayoutRootProps): JSX.Element => (
  <StyledLayoutRoot className={className}>{children}</StyledLayoutRoot>
);

export default LayoutRoot;
