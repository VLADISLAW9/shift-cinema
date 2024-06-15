import { TanStackQueryProvider } from '@/app/providers/TanStackQueryProvider';

import '@/app/styles/index.scss';

export const TanStackQueryDecorator = (Story: any) => {
  return (
    <TanStackQueryProvider>
      <Story />;
    </TanStackQueryProvider>
  );
};
