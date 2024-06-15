import { BrowserRouter } from 'react-router-dom';

import '@/app/styles/index.scss';

export const RouteDecorator = (Story: any) => {
  return (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  );
};
