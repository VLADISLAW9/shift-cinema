import { forwardRef } from 'react';

import type { FlexProps } from '../Flex/Flex';
import { Flex } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;

export const VStack = forwardRef<HTMLDivElement, VStackProps>((props, ref?) => {
  const { align = 'start' } = props;
  return <Flex ref={ref} {...props} direction='column' align={align} />;
});
