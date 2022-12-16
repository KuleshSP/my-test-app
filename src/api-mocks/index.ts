import MockAdapter from 'axios-mock-adapter';
import {instance} from '_main/services/axios';
import {TABLE_ROWS_AMOUNT} from './constants';
import {generateMockData} from './utils';

const {documents1, documents2} = generateMockData(TABLE_ROWS_AMOUNT);

const mock = new MockAdapter(instance, {delayResponse: 100});

mock
    .onGet('/documents1')
    .reply(() => {
      return [200, JSON.stringify(documents1)];
    })
    .onGet('/documents2')
    .reply(() => {
      return [200, JSON.stringify(documents2)];
    })
    .onPost('/cancel')
    .reply((params) => {
      return [200, `Documents to cancel received successfully ${params.data}`];
    })
    .onAny()
    .passThrough();
