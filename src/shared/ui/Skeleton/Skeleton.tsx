import type { CSSProperties } from 'react';
import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
}

export const Skeleton = memo((props: SkeletonProps) => {
  const { className, height, width, border = '8px' } = props;

  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border
  };

  return <div className={classNames(cls.skeleton, {}, [className])} style={styles} />;
});
