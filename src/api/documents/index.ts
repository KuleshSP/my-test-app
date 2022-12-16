import {CancelDocumentsRequestedPayload} from 'pages/_home/services/types';
import {instance} from '_main/services/axios';
import {type GetDocumentResponse} from './types';

const requests = {
  getDocuments1: (): Promise<GetDocumentResponse> => {
    return instance.get('/documents1');
  },
  getDocuments2: (): Promise<GetDocumentResponse> => {
    return instance.get('/documents2');
  },
  cancelDocuments: (params: CancelDocumentsRequestedPayload): Promise<void> => {
    return instance.post('/cancel', params);
  },
};

export default requests;
