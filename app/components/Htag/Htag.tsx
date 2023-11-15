import { ReactElement } from 'react';
import { HtagProps } from '@/app/components/Htag/Htag.props';
import s from './Htag.module.css';

export const Htag = ({ tag, children }: HtagProps): ReactElement => {
  const tagMap: Record<HtagProps['tag'], ReactElement> = {
    'h1': <h1 className={s.h1}>{children}</h1>,
    'h2': <h2 className={s.h2}>{children}</h2>,
    'h3': <h3 className={s.h3}>{children}</h3>
  };

  return tagMap[tag] || <></>;

};