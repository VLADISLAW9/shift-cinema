import Spinner from '@/shared/assets/Spinner.svg';

import { Icon } from '../Icon';

interface LoaderProps {
  className?: string;
  width?: number;
  height?: number;
}

export const Loader = (props: LoaderProps) => {
  const { className, height = 150, width = 150 } = props;
  return (
    <div className={className}>
      <Icon width={width} height={height} Svg={Spinner} />
    </div>
  );
};
