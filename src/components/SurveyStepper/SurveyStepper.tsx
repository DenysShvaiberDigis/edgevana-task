import toast from 'react-hot-toast';
import { ChangeEvent, useState } from 'react';

import { submitSurvey } from '@/utils';
import { BUTTON_TYPES, Button } from '../Button/Button';

type Props = {};

export const SurveyStepper = ({}: Props) => {
  const [progress, setProgress] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [userAnswers, setUserAnswers] = useState<SurveyAnswer[]>([]);

  const questionsWithAnswers: SurveyData[] = [
    {
      question: 'How do you plan to use Edgevana?',
      answers: [
        'High Performant Validator',
        'Public Full Node Producer',
        'RPC (full program IDs)',
        'Web3 Developer',
        'Web2 Developer',
      ],
    },
    {
      question:
        'Is this your first time trying to run a node? If not, where have you participated in the past?',
      answers: [
        'QuickNode',
        'Amazon Managed Blockchain',
        'Azure Blockchain Workbench',
        'Alchemy',
        'Blockdaemon',
        'This will be my first deployment! ',
      ],
    },
  ];

  const isLastAnswer = progress === questionsWithAnswers.length - 1;
  const answerSubmitted = progress >= questionsWithAnswers.length;

  const handleSurveySubmit = async () => {
    const res = await submitSurvey(userAnswers);

    if (!res.ok) {
      toast.error(res.message!);
    }
  };

  const handleAnswer = () => {
    if (selectedAnswer) {
      setUserAnswers((prevState) => [
        ...(prevState || []),
        {
          answer: selectedAnswer,
          question: questionsWithAnswers[progress].question,
        },
      ]);
      setSelectedAnswer('');
      setProgress((prevProgress) => prevProgress + 1);

      if (isLastAnswer) {
        handleSurveySubmit();
      }
    } else {
      toast.error('Please select an answer before proceeding next');
    }
  };

  const handleSelectAnswer = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer(event.target.value);
  };

  return (
    <div className="bg-white rounded-xl shadow-xl sm:w-[680px] max-w-[680px]">
      <div className="p-3 sm:px-14 sm:py-8">
        <h4 className="text-xl text-primary-00 font-semibold">Setup Guide</h4>
        <p className="font-medium text-secondary-01/70 mt-4">
          Unlock your highest potential with our personalized guide!
        </p>
        <p className="font-medium text-secondary-01/70 mt-4">
          {progress}/{questionsWithAnswers.length} Questions answered
        </p>
      </div>

      <div className="relative h-[3px] w-full bg-light-03">
        <div
          className="absolute top-0 left-0 h-full bg-primary-01"
          style={{
            width: `${(progress / questionsWithAnswers.length) * 100}%`,
          }}
        />
      </div>

      <div className="p-3 sm:px-14 sm:py-10">
        {answerSubmitted ? (
          <h3 className="text-primary-00 text-lg font-semibold">
            Submitted successfully
          </h3>
        ) : (
          <>
            <div className="flex gap-x-5 items-center">
              <div className="flex justify-center items-center bg-primary-01 h-8 w-8 min-w-[32px] rounded-full text-white font-semibold cursor-default">
                {progress + 1}
              </div>

              <p className="text-primary-00 text-lg font-semibold">
                {questionsWithAnswers[progress].question}
              </p>
            </div>

            <div className="flex flex-col gap-y-6 mt-10">
              {questionsWithAnswers[progress].answers.map((answer) => (
                <label
                  key={answer}
                  htmlFor={answer}
                  className="flex items-center cursor-pointer"
                >
                  <input
                    type="radio"
                    id={answer}
                    checked={selectedAnswer === answer}
                    value={answer}
                    onChange={handleSelectAnswer}
                    className="w-5 h-5 border border-secondary-01 rounded-full bg-white focus:outline-none focus:border-primary-00"
                  />
                  <div className="ml-3">
                    <span
                      className={`${
                        selectedAnswer === answer
                          ? 'text-primary-00'
                          : 'text-secondary-01'
                      } font-medium`}
                    >
                      {answer}
                    </span>
                  </div>
                </label>
              ))}
            </div>
          </>
        )}

        {answerSubmitted ? (
          <Button className="mt-12">Return</Button>
        ) : (
          <div className="flex gap-x-6 mt-12">
            <Button btnType={BUTTON_TYPES.SECONDARY}>Cancel</Button>
            <Button onClick={handleAnswer}>
              {isLastAnswer ? 'Submit' : 'Next'}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
