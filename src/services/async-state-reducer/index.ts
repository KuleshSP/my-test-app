import type {AsyncStateTypes} from './types';

const initialState: AsyncStateTypes = {
  loaded: false,
  pending: false,
  error: false,
};

export const makeAsyncStateReducer =
  (
      requestedPattern: string,
      succeedPattern: string,
      failedPattern: string,
      resetPattern: string = 'ASYNC_STATE/RESET',
  ) =>
    (state = initialState, action: any): AsyncStateTypes => {
      switch (action.type) {
        case requestedPattern:
          return {
            ...state,
            pending: true,
          };

        case succeedPattern:
          return {
            ...state,
            loaded: true,
            pending: false,
            error: false,
          };

        case failedPattern:
          const error = action.error === 'Cancel' ? false : action.error;

          return {
            ...state,
            pending: false,
            error,
          };

        case resetPattern:
          return initialState;

        default:
          return state;
      }
    };
