import 'api-mocks';
import './index.css';

import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom/client';
import store from '_main/services/store';

import theme from 'theme';
import {ThemeProvider} from '@mui/material/styles';
import App from './_main/components/App';

const container = document.getElementById('root')!;

const root = ReactDOM.createRoot(container);

root.render(
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </React.StrictMode>,
);
