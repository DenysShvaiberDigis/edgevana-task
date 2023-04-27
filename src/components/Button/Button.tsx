import { ButtonHTMLAttributes } from 'react';

import { BUTTON_TYPES } from '@/enums';
import { classNames } from '@/helpers/common';

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
