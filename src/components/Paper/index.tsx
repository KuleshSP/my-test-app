import React from 'react';
import {Paper, type PaperProps} from '@mui/material';
import styled from '@emotion/styled';

export const UIPaper = styled((props: PaperProps) => <Paper elevation={3} {...props} />)`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 50px 10px 0 10px;
  margin-bottom: 10px;
`;

export default UIPaper;
