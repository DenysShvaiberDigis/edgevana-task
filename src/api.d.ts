type ResponseOptions = {
  ok?: boolean;
  statusCode?: number;
};

type SuccessResponse<T> = {
  data?: T;
  message?: string;
};

type ErrorResponse = {
  message?: string;
};

type BaseResponseData<T> = ResponseOptions & SuccessResponse<T> & ErrorResponse;

type RegistrationDataRes = { user: User; message: string };
