import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Modal } from '@/shared/ui/Modal';

import { FilmUserDataForm } from '../FilmUserDataForm/FilmUserDataForm';

interface FilmUserDataModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  setPersonMiddleName: (value: string) => void;
  setPersonFirstName: (value: string) => void;
  setPersonLastName: (value: string) => void;
  setPersonPhone: (value: string) => void;
  setFilmId: (value: string) => void;
}

export const FilmUserDataModal = memo((props: FilmUserDataModalProps) => {
  const {
    className,
    isOpen,
    onClose,
    setPersonMiddleName,
    setPersonFirstName,
    setPersonLastName,
    setPersonPhone,
    setFilmId
  } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose} className={classNames('', {}, [className])}>
      <FilmUserDataForm
        setPersonMiddleName={setPersonMiddleName}
        setPersonFirstName={setPersonFirstName}
        setPersonLastName={setPersonLastName}
        setPersonPhone={setPersonPhone}
        setFilmId={setFilmId}
      />
    </Modal>
  );
});
