import type { Mods } from '@/shared/lib/classNames';
import { classNames } from '@/shared/lib/classNames';

import cls from './Typography.module.scss';

type TypographyVariant =
  // Regular
  | 'typography32_regular'
  | 'typography24_regular'
  | 'typography20_regular'
  | 'typography16_regular'
  | 'typography14_regular'
  // Medium
  | 'typography32_medium'
  | 'typography24_medium'
  | 'typography20_medium'
  | 'typography16_medium'
  | 'typography14_medium'
  // Semibold
  | 'typography32_semibold'
  | 'typography24_semibold'
  | 'typography20_semibold'
  | 'typography16_semibold'
  | 'typography14_semibold'
  // Bold
  | 'typography32_bold'
  | 'typography24_bold'
  | 'typography20_bold'
  | 'typography16_bold'
  | 'typography14_bold';

type TypographyTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'p';

export type TypographyProps<Tag extends TypographyTag> = React.ComponentProps<Tag> & {
  variant: TypographyVariant;
  clickable?: boolean;
  tag?: TypographyTag;
  children: React.ReactNode;
};

export const Typography = <Tag extends TypographyTag = 'div'>({
  variant,
  tag = 'div',
  children,
  className,
  ...props
}: TypographyProps<Tag>) => {
  const Component = tag;

  const mods: Mods = {
    [cls.clickable]: props.clickable
  };

  return (
    <Component className={classNames(cls[variant], mods, [className])} {...props}>
      {children}
    </Component>
  );
};
