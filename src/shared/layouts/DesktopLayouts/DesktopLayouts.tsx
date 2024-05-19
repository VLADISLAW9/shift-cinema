import type { ReactElement } from 'react';
import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './DesktopLayouts.module.scss';

interface DesktopLayoutsProps {
  className?: string;
  header: ReactElement;
  content: ReactElement;
}

export const DesktopLayouts = memo((props: DesktopLayoutsProps) => {
  const { className, content, header } = props;
  return (
    <div className={classNames(cls.desktop_layouts, {}, [className])}>
      <div className={cls.header}>{header}</div>
      <div className={cls.content}>{content}</div>
    </div>
  );
});
