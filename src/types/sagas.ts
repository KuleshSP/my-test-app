import {type StrictEffect} from 'redux-saga/effects';

export type SagaTypes<T> = Generator<StrictEffect, void, T>;
