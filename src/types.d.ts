
type SignupInputs = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  agreeToTerms: boolean;
};

type User = {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
};

type SurveyData = {
  question: string;
  answers: string[];
}

type SurveyAnswer = {
  question: string;
  answer: string;
}

type UserContext = {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
};
