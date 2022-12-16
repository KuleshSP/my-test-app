import type {GetDocumentResponse} from 'api/documents/types';
import type {ITable} from 'components/Table/services/types';
import type {AsyncStateTypes} from 'services/async-state-reducer/types';
import type {IDocument} from 'types/document';
import {actions} from './actions';

export type IDocumentWithTotal = IDocument & { total: number };
export type HomePageTable = Omit<ITable<IDocumentWithTotal>, 'params'>;

export interface DocumentsSucceedPayload {
  documents1: GetDocumentResponse;
  documents2: GetDocumentResponse;
}

export type CancelDocumentsRequestedPayload = IDocumentWithTotal['id'][];

export interface HomePageState {
  mainState: {
    table: HomePageTable;
  };
  tableAsyncState: AsyncStateTypes;
}

export type HomePageMainState = HomePageState['mainState'];
export type HomePageTableAsyncState = HomePageState['tableAsyncState'];

export type ActionTypes = ReturnType<typeof actions[keyof typeof actions]>;
