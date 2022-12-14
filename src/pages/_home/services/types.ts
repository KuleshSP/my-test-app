import {actions} from './actions';

export interface HomePageState {
  someState: string;
}

export interface ActionPayload {
  string: string;
}

export type ActionTypes = ReturnType<typeof actions[keyof typeof actions]>;
