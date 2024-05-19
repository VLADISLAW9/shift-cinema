import type { ReactNode } from 'react';
import { memo } from 'react';
import type { LinkProps as ReactRouterDomLinkProps } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Link.module.scss';

interface LinkProps extends ReactRouterDomLinkProps {
  className?: string;
  children?: ReactNode;
  activeClassName?: string;
}

export const Link = memo((props: LinkProps) => {
  const { className, to, children, activeClassName = '', ...otherProps } = props;
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames(cls.link, { [activeClassName]: isActive }, [className])
      }
      {...otherProps}
    >
      {children}
    </NavLink>
  );
});
