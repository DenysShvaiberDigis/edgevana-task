import { ButtonHTMLAttributes } from 'react';

import { classNames } from '@/helpers/common';

export enum BUTTON_TYPES {
  BASE = 'rounded-lg inline-block py-2 px-4 font-semibold text-sm min-h-[52px] w-full transition duration-200 ease-in-out',
  PRIMARY = 'bg-primary-01 hover:bg-primary-00 text-white disabled:bg-gray-400',
}

type Props = {
  children: React.ReactNode;
  btnType?: BUTTON_TYPES;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  btnType = BUTTON_TYPES.PRIMARY,
  className = '',
  ...otherProps
}: Props) => {
  return (
    <button
      className={classNames(BUTTON_TYPES.BASE, btnType, className)}
      {...otherProps}
    >
      {children}
    </button>
  );
};
