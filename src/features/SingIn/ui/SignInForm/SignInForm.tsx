import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

interface SignInFormProps {
  className?: string;
}

export const SignInForm = memo((props: SignInFormProps) => {
  const { className } = props;
  return <div className={classNames('', {}, [className])}>SignInForm</div>;
});
