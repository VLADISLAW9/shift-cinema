import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { HStack, VStack } from '@/shared/ui/Stack';

interface FilmDetailSkeletonProps {
  className?: string;
}

export const FilmDetailSkeleton = (props: FilmDetailSkeletonProps) => {
  const { className } = props;
  return (
    <VStack gap='48' className={className}>
      <HStack align='start' gap='32'>
        <Skeleton height={325} width={325} />
        <VStack gap='16'>
          <Skeleton height={25} width={250} />
          <Skeleton height={25} width={150} />
          <Skeleton height={200} width={800} />
        </VStack>
      </HStack>
    </VStack>
  );
};
