import { classNames } from '@/shared/lib/classNames';

import cls from './Typography.module.scss';

type TypographyVariant =
  | 'title'
  | 'paragraph24_regular'
  | 'paragraph20_regular'
  | 'paragraph16_regular'
  | 'paragraph14_regular';

type TypographyTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'p';

export type TypographyProps<Tag extends TypographyTag> = React.ComponentProps<Tag> & {
  variant: TypographyVariant;
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

  return (
    <Component className={classNames(cls.variant, {}, [className])} {...props}>
      {children}
    </Component>
  );
};
