import type { ReactNode } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Tag.module.scss';

export type TagVariant = 'success' | 'error';

interface TagProps {
  className?: string;
  children?: ReactNode;
  variant: TagVariant;
}

export const Tag = (props: TagProps) => {
  const { className, children, variant } = props;

  return <div className={classNames(cls.tag, {}, [className, cls[variant]])}>{children}</div>;
};
