import type { ReactNode } from 'react';
import type { RadioGroupProps as HRadioGroupProps } from '@headlessui/react';
import { Radio, RadioGroup as HRadioGroup } from '@headlessui/react';

import { classNames } from '@/shared/lib/classNames';

import { VStack } from '../Stack';
import { Typography } from '../Typography';

import cls from './RadioGroup.module.scss';

export type RadioGroupVariant = 'segmented' | 'tabs';

export interface RadioGroupItem<T extends string> {
  value: T;
  content: ReactNode;
  disabled?: boolean;
}

interface RadioGroupProps<T extends string> extends HRadioGroupProps {
  className?: string;
  value?: T;
  defaultValue?: string;
  items?: RadioGroupItem<T>[];
  onChange: (value: T) => void;
  readonly?: boolean;
  variant?: RadioGroupVariant;
  label?: string;
}

export const RadioGroup = <T extends string>(props: RadioGroupProps<T>) => {
  const { className, value, onChange, variant = 'segmented', items, label, ...otherProps } = props;
  return (
    <VStack gap='16'>
      {label && (
        <Typography variant='typography14_regular' className={cls.label}>
          {label}
        </Typography>
      )}
      <HRadioGroup
        className={classNames(cls.radio_group, {}, [className, cls[variant]])}
        value={value}
        onChange={onChange}
        aria-label='Server size'
        {...otherProps}
      >
        {items?.map((item, index) => (
          <Radio
            disabled={item.disabled}
            className={classNames(cls.radio_group_item_wrapper, {}, [className, cls[variant]])}
            value={item.value}
          >
            {({ checked }) => (
              <li
                className={classNames(cls.radio_group_item, {
                  [cls.checked]: checked,
                  [cls.last]: index === items.length - 1
                })}
              >
                {item.content}
              </li>
            )}
          </Radio>
        ))}
      </HRadioGroup>
    </VStack>
  );
};
