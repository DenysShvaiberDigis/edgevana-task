import Image from 'next/image';
import { InputHTMLAttributes, useState } from 'react';
import {
  UseFormRegister,
  FieldError,
  FieldValues,
  Path,
} from 'react-hook-form';

import EyeOpen from '../../../public/icons/eye-open.svg';
import EyeClose from '../../../public/icons/eye-close.svg';

type FormInputProps<T extends FieldValues> = {
  id: Path<T>;
  name?: string;
  label: string;
  error?: FieldError;
  required?: boolean;
  register?: UseFormRegister<T>;
} & InputHTMLAttributes<HTMLInputElement>;

export const FormInput = <T extends FieldValues>({
  label,
  id,
  register,
  type = 'text',
  required,
  name,
  error,
  ...otherProps
}: FormInputProps<T>) => {
  const [isPassShown, setPassShown] = useState(false);
  const [typeState, setTypeState] = useState(type);

  const eyeClickHandler = () => {
    setPassShown(!isPassShown);
    setTypeState(typeState === 'password' ? 'text' : 'password');
  };

  return (
    <div className="relative">
      {label && (
        <label
          htmlFor={id}
          className="block mb-2 text-sm text-primary-00 font-semibold"
        >
          {label}
        </label>
      )}

      <div className='relative'>
        <input
          id={id}
          type={typeState}
          className="w-full outline-none p-4 text-sm text-secondary-00 font-semibold bg-light-00 rounded-lg placeholder:text-secondary-02"
          {...register?.(id, { required })}
          {...otherProps}
        />

        {type === 'password' && (
          <Image
            src={isPassShown ? EyeOpen : EyeClose}
            onClick={eyeClickHandler}
            className="absolute top-3.5 right-4 cursor-pointer"
            alt="Eye icon"
          />
        )}
      </div>

      {error?.message && (
        <div className="text-red-600 absolute left-0 text-xs mt-[2px]">
          {error?.message}
        </div>
      )}
    </div>
  );
};
