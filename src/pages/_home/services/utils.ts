import {CURRENCIES, RUB_TO_USD_CONVERSION_RATE} from 'constants/common';
import type {IDocument} from 'types/document';
import type {CancelDocumentsRequestedPayload, IDocumentWithTotal} from './types';

export const mergeById = (arrayX: IDocument[], arrayY: IDocument[]): IDocument[] => {
  const mergedArrays = arrayX.concat(arrayY).reduce((acc, curr) => {
    acc[curr.id] = Object.assign(acc[curr.id] || {}, curr);

    return acc;
  }, {} as Record<IDocument['id'], IDocument>);

  return Object.values(mergedArrays);
};

export const addTotalColumn = (items: IDocument[]): IDocumentWithTotal[] => {
  return items.map((item) => {
    return {...item, total: item.sum * item.qty};
  });
};

export const getSumInRUB = (value: number, currency: CURRENCIES) => {
  return currency === CURRENCIES.RUB ? value : value * RUB_TO_USD_CONVERSION_RATE;
};

export const getTotalInfo = (items: IDocumentWithTotal[]) =>
  items.reduce(
      (acc, curr) => ({
        totalVolume: acc.totalVolume + curr.volume,
        totalQty: acc.totalQty + curr.qty,
      }),
      {
        totalVolume: 0,
        totalQty: 0,
      },
  );

export const getCancelledTitles = (
    items: IDocumentWithTotal[],
    _idsToCancel: CancelDocumentsRequestedPayload,
): IDocumentWithTotal['name'][] =>
  _idsToCancel.reduce((acc, curr) => {
    const result = items.find((item) => item.id === curr);

    return result === undefined ? acc : [...acc, result.name];
  }, [] as IDocumentWithTotal['name'][]);
