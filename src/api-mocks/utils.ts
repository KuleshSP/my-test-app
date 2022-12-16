import {CURRENCIES, STATUSES} from 'constants/common';
import {MAXIMUM_TITLE_LENGTH, TABLE_ROWS_AMOUNT} from './constants';
import type {MockedDocuments} from './types';

function generateRandomInteger(minimum: number, maximum: number) {
  return Math.round(Math.random() * (maximum - minimum) + minimum);
}

function generateRandomDate(start: Date, end: Date): Date {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

export function generateMockData(amount: number): MockedDocuments {
  const items = Array.from({length: amount}, (_, i) => {
    const randomStatus = !!generateRandomInteger(0, 1) ? STATUSES.ACTIVE : STATUSES.ARCHIVE;
    const randomSum = generateRandomInteger(1, 10000);
    const randomQuantity = generateRandomInteger(1, 100);
    const randomVolume = generateRandomInteger(1, 100);
    const name = (Math.random().toString(36) + '00000000000000000').slice(
        2,
      i <= MAXIMUM_TITLE_LENGTH ? i + 3 : MAXIMUM_TITLE_LENGTH,
    );
    const [randomDate] = generateRandomDate(new Date(2021, 0, 1), new Date())
        .toISOString()
        .split('T');
    const currency = !!generateRandomInteger(0, 1) ? CURRENCIES.RUB : CURRENCIES.USD;

    return {
      id: i.toString(),
      status: randomStatus,
      sum: randomSum,
      qty: randomQuantity,
      volume: randomVolume,
      name,
      delivery_date: randomDate,
      currency,
    };
  });

  // To simulate possibility of identical ids in different documents
  const documents1 = [...items].slice(0, TABLE_ROWS_AMOUNT + 2);
  const documents2 = [...items].slice(TABLE_ROWS_AMOUNT - 2);

  return {
    documents1: {
      items: documents1,
    },
    documents2: {
      items: documents2,
    },
  };
}
