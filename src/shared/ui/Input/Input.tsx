import React from 'react';

import { classNames } from '@/shared/lib/classNames';

import { VStack } from '../Stack';
import { Typography } from '../Typography';

import cls from './Input.module.scss';

type InputProps<
  Component extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any> = 'input'
> = {
  label?: string;
  error?: string;
  component?: Component;
} & React.ComponentProps<Component>;

export const Input = React.forwardRef(
  (
    { label, className, component, error, id: externalId, required, ...props }: InputProps<'input'>,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const internalId = React.useId();
    const id = externalId ?? internalId;

    const Component = component || 'input';

    return (
      <VStack gap='8' className={classNames(cls.input_wrapper, { [cls.error]: !!error })}>
        {label && (
          <Typography variant='typography14_regular'>
            {label} {required && '*'}
          </Typography>
        )}
        <Component
          className={classNames(cls.input, {}, [className])}
          {...props}
          id={id}
          ref={ref}
        />
        {error && (
          <Typography tag='p' variant='typography14_regular'>
            {error}
          </Typography>
        )}
      </VStack>
    );
  }
) as <Component extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any> = 'input'>(
  props: InputProps<Component> & { ref?: React.ForwardedRef<HTMLInputElement> }
) => React.ReactElement;
