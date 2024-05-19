import type { InputHTMLAttributes } from 'react';
import React, { memo, useEffect, useRef, useState } from 'react';

import type { Mods } from '@/shared/lib/classNames/classNames';
import { classNames } from '@/shared/lib/classNames/classNames';

import { HStack } from '../Stack';
import { Typography } from '../Typography';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly' | 'size'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  label?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  readonly?: boolean;
  error?: string;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    readonly,
    label,
    error,
    ...otherProps
  } = props;
  const ref = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autofocus]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const mods: Mods = {
    [cls.readonly]: readonly,
    [cls.focused]: isFocused
  };

  const input = (
    <div className={classNames(cls.input_wrapper, mods, [className])}>
      <input
        ref={ref}
        type={type}
        value={value}
        onChange={onChangeHandler}
        className={cls.input}
        onFocus={onFocus}
        onBlur={onBlur}
        readOnly={readonly}
        placeholder={placeholder}
        {...otherProps}
      />
    </div>
  );

  return (
    <HStack max gap='8'>
      {label && (
        <Typography variant='typography16_regular' className={cls.label}>
          {label}
        </Typography>
      )}
      {input}
      {error && (
        <Typography variant='typography14_regular' tag='p' className={cls.error}>
          {error}
        </Typography>
      )}
    </HStack>
  );
});
