import { memo } from 'react';

import { Skeleton } from '@/shared/ui/Skeleton';

interface OrderListItemSkeletonProps {
  className?: string;
}

export const OrderListItemSkeleton = memo((props: OrderListItemSkeletonProps) => {
  const { className } = props;
  return (
    <div className={className}>
      <Skeleton width={325} height={150} />
    </div>
  );
});
