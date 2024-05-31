import { memo } from 'react';
import { useParams } from 'react-router-dom';

import { FilmDetails } from '@/entities/Film/ui/FilmDetails/FilmDetails';
import { classNames } from '@/shared/lib/classNames/classNames';

interface FilmDetailsPageProps {
  className?: string;
}

const FilmDetailsPage = (props: FilmDetailsPageProps) => {
  const { className } = props;
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return null;
  }

  return (
    <div className={classNames('', {}, [className])}>
      <FilmDetails id={id} />
    </div>
  );
};

export default memo(FilmDetailsPage);
