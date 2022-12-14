import MockAdapter from 'axios-mock-adapter';
import {instance} from '_main/services/axios';

const mock = new MockAdapter(instance, {delayResponse: 100});

mock.onAny().passThrough();
