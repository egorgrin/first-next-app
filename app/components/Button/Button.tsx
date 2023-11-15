import { ReactElement } from 'react';
import { ButtonProps } from '@/app/components/Button/Button.props';
import s from './Button.module.css';
import cn from 'classnames';

export const Button = ({ children, appearance }: ButtonProps): ReactElement => {
  return (
    <button
      className={cn(
        s.button, {
          [s.colored]: appearance === 'colored',
          [s.transparent]: appearance === 'transparent'
        }
      )}
    >
      {children}
    </button>
  );

};