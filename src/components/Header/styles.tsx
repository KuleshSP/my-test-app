import styled from '@emotion/styled';

export const HeaderBox = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: darkgray;
`;

export const ContentBox = styled.div`
  display: flex;
  width: 80%;
  max-width: ${({theme}) => theme.breakpoints.values.xl}px;
  min-width: ${({theme}) => theme.breakpoints.values.sm}px;
`;
