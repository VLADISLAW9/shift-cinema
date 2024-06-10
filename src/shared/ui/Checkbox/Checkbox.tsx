import type { ReactNode } from 'react';
import { forwardRef } from 'react';
import type { CheckboxProps as HCheckboxProps } from '@headlessui/react';
import { Checkbox as HCheckbox } from '@headlessui/react';

import { classNames } from '@/shared/lib/classNames/classNames';

interface CheckboxProps extends HCheckboxProps {
  className?: string;
  enabled?: boolean;
  setEnabled: () => void;
  children: ReactNode;
}

export const Checkbox = forwardRef<HTMLDivElement, CheckboxProps>((props, ref?) => {
  const { className, setEnabled, enabled, children, ...otherProps } = props;
  return (
    <HCheckbox
      ref={ref}
      checked={enabled}
      onChange={setEnabled}
      className={classNames('', {}, [className])}
      {...otherProps}
    >
      {children}
    </HCheckbox>
  );
});
