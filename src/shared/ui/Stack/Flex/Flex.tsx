import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';
import type { Mods } from '@lib/classNames';
import { classNames } from '@lib/classNames';

import cls from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexWrap = 'nowrap' | 'wrap';
export type FlexGap = '4' | '8' | '16' | '24' | '32' | '48';

const justifyClasses: Record<FlexJustify, string> = {
  start: cls.justify_start,
  center: cls.justify_center,
  end: cls.justify_end,
  between: cls.justify_between
};

const alignClasses: Record<FlexAlign, string> = {
  start: cls.align_start,
  center: cls.align_center,
  end: cls.align_end
};

const directionClasses: Record<FlexDirection, string> = {
  row: cls.direction_row,
  column: cls.direction_column
};

const gapClasses: Record<FlexGap, string> = {
  4: cls.gap_4,
  8: cls.gap_8,
  16: cls.gap_16,
  24: cls.gap_24,
  32: cls.gap_32,
  48: cls.gap_48
};

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface FlexProps extends DivProps {
  className?: string;
  children: ReactNode;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction: FlexDirection;
  wrap?: FlexWrap;
  gap?: FlexGap;
  max?: boolean;
}

export const Flex = forwardRef<HTMLDivElement, FlexProps>((props, ref) => {
  const {
    className,
    children,
    justify = 'start',
    align = 'center',
    direction = 'row',
    wrap = 'nowrap',
    gap,
    max,
    ...otherProps
  } = props;

  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    cls[wrap],
    gap && gapClasses[gap]
  ];

  const mods: Mods = {
    [cls.max]: max
  };

  return (
    <div ref={ref} className={classNames(cls.flex, mods, classes)} {...otherProps}>
      {children}
    </div>
  );
});
