import Image from 'next/image';
import { UseFormRegister } from 'react-hook-form';

import CheckIcon from '../../../public/icons/checkmark-white.svg'

type CustomCheckboxProps = {
  name: string;
  content: React.ReactNode;
  checked: boolean;
  register?: UseFormRegister<any>;
};

export const CustomCheckbox = ({
  name,
  content,
  register,
  checked,
}: CustomCheckboxProps) => {
  return (
    <div className="flex justify-between gap-x-5">
      <label htmlFor={name}>
        <div
          className={`relative w-6 h-6 flex items-center justify-center rounded-[4px] cursor-pointer border border-secondary-02 transition-colors duration-150 ${
            checked ? 'bg-primary-00 border-primary-00' : ''
          }`}
        >

          {checked && (
            <Image src={CheckIcon} alt="check" width={15} height={15} />
          )}
        </div>

        <input
          id={name}
          name={name}
          type="checkbox"
          className="hidden"
          {...register?.(name)}
        />
      </label>

      {content}
    </div>
  );
};
