import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  CancelTokenSource,
  CancelToken,
} from 'axios';

const BASE_URL = import.meta.env.BASE_URL;

export const instance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Authorization': 'Bearer token',
    'Content-Type': 'application/json',
  },
});

(function createAxiosInterceptor() {
  instance.interceptors.response.use(
      (response: AxiosResponse) => response.data,
      (error: AxiosError) => Promise.reject(error?.response?.data || error.toString()),
  );
})();

const AxiosCancelToken = axios.CancelToken;

export const cancellableRequest = <T>(
  requestToWrap: (cancelToken: CancelToken, params: T) => Promise<any>,
) => {
  let source: any = null;

  const cancel = () => {
    if (source != null) {
      source.cancel();
      source = null;
    }
  };

  const request = (params: T) => {
    const localSource: CancelTokenSource = AxiosCancelToken.source();
    source = localSource;

    return requestToWrap(localSource.token, params).then(
        (response: any) => {
          if (source === localSource) {
            source = null;
          }

          return response;
        },
        (error: Error) => {
          if (source === localSource) {
            source = null;
          }

          throw error;
        },
    );
  };

  return {cancel, request};
};
