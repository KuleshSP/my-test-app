import {STATUSES} from 'constants/common';

export interface IDocument {
  id: string;
  status: STATUSES;
  sum: number;
  qty: number;
  volume: number;
  name: string;
  delivery_date: string;
  currency: string;
}
