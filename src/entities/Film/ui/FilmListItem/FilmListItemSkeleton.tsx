import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { VStack } from '@/shared/ui/Stack';

export const FilmListItemSkeleton = () => {
  return (
    <VStack gap='16'>
      <Skeleton height={325} width={325} />
      <Skeleton height={25} width={175} />
      <Skeleton height={50} width={325} />
      <Skeleton height={25} width={125} />
    </VStack>
  );
};
