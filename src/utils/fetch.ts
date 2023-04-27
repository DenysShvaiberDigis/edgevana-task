import { BaseRequest } from '@/helpers/api';

export const registerUser = (
  data: SignupInputs
): Promise<BaseResponseData<RegistrationDataRes>> => {
  return BaseRequest.post('/api/auth/signup', data);
};

export const submitSurvey = (data: SurveyAnswer[]): Promise<BaseResponseData<null>> => {
  return BaseRequest.post('/api/survey/answer', data);
};